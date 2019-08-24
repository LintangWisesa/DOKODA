import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'
import {Link} from 'react-router-dom'

class ProfilRS extends Component{
    
    constructor(){
        super()
        this.state = {
            profil: [],
            dokter: []
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        var url = `http://localhost:1234/rumahsakit/${this.props.match.params.kode}`
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                profil: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
        var url = `http://localhost:1234/daftardokrs/${this.props.match.params.kode}`
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                dokter: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    
    render(){

        var profilRS = this.state.profil.map((val, i)=>{
            return (
                <section key={i} id="status" className="doctor_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="mt-5 section_tittle text-center">
                                <h2>{val.rsnama}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src={val.rsimg} alt="doctor"/>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                        <a href="#"> <i className="ti-instagram"></i> </a>
                                        <a href="#"> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-lg-6 mb-5'>
                            <div className="single_blog_item">
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>Profil</h3>
                                        <hr></hr>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                            &nbsp;&nbsp;
                                            {val.rsnama}
                                            &nbsp;&nbsp;  
                                            <i style={{color:'orange'}} class="fas fa-layer-group"></i>
                                            &nbsp;&nbsp;
                                            <i>{val.rsjenis} Kelas {val.rskelas}</i>
                                        </h5>
                                        <h5 className='mb-3'>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {val.rsalamat}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-user-tie"></i>
                                            &nbsp;&nbsp;
                                            {val.rsdirektur}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-phone-square"></i>
                                            &nbsp;&nbsp;
                                            {val.rstelp}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-desktop"></i>
                                            &nbsp;&nbsp;
                                            {val.rsweb}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-star"></i>
                                            &nbsp;&nbsp;
                                            {val.rsrating}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            )
        })

        var listDokter = this.state.dokter.map((val, i)=>{
            return (
                <div key={i} className="col-sm-6 col-lg-3 mb-5">
                    <Link to={`/dok/${val.dstr}`}>
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={val.dfoto} alt="doctor"/>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>{val.dnama}</h3>
                                <p>
                                    <i style={{color:'orange'}} class="fas fa-stethoscope"></i>&nbsp;
                                    {val.dkompetensi}
                                </p>
                                
                                <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>
                                    {val.drating}
                                </span>
                                &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>
                                    {val.rsnama}
                                </span> 
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        })

        return(
            <div>
            
            {profilRS}

            <section style={{marginTop:0}} 
            id="status" className="doctor_part">
                <div className="container">
                    <div className="row">
                    {listDokter}
                    </div>
                </div>
            </section>
            
            <Footer/>
            </div>
        )
    }
}

export default ProfilRS