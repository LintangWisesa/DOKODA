import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'

class ProfilDokter extends Component{
    
    constructor(){
        super()
        this.state = {
            profil: []
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        var url = `http://localhost:1234/pasien/${this.props.match.params.ktp}`
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
    }
    
    render(){

        var listDokter = this.state.profil.map((val, i)=>{
            return (
                <section key={i} id="status" className="doctor_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="mt-5 section_tittle text-center">
                                <h2>{val.pnama}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-lg-4 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src={val.pfoto} alt="doctor"/>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                        <a href="#"> <i className="ti-instagram"></i> </a>
                                        <a href="#"> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 col-lg-4 mb-5'>
                            <div className="single_blog_item">
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>Profil</h3>
                                        <hr></hr>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-id-card"></i>
                                            &nbsp;&nbsp;
                                            <i style={{fontWeight:'lighter'}}>KTP:</i> {val.pktp}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-id-card"></i>
                                            &nbsp;&nbsp;
                                            <i style={{fontWeight:'lighter'}}>BPJS:</i> {val.pbpjs}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-baby"></i>
                                            &nbsp;&nbsp;
                                            {val.ptgl_lahir.split('T')[0]}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-venus-mars"></i>
                                            &nbsp;&nbsp;
                                            {val.psex}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                            &nbsp;&nbsp;
                                            {val.palamat}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-envelope"></i>
                                            &nbsp;&nbsp;
                                            {val.pemail}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-phone-square-alt"></i>
                                            &nbsp;&nbsp;
                                            {val.ptelp}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-book-medical"></i>
                                            &nbsp;&nbsp;
                                            <i style={{fontWeight:'lighter'}}>Medical Record:</i> {val.prekmed}
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

        return(
            <div>
            {listDokter}
            <Footer/>
            </div>
        )
    }
}

export default ProfilDokter