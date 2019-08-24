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
        var url = `http://localhost:1234/dokrs/${this.props.match.params.str}`
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
                                <h2>{val.dnama}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-lg-4 mb-5">
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
                            </div>
                        </div>
                        <div className='col-sm-4 col-lg-4 mb-5'>
                            <div className="single_blog_item">
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>Profil</h3>
                                        <hr></hr>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>
                                            &nbsp;&nbsp;
                                            {val.dkompetensi}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-address-card"></i>
                                            &nbsp;&nbsp;
                                            {val.dstr}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-calendar-check"></i>
                                            &nbsp;&nbsp;
                                            {val.dstrawal.split('T')[0]} <i>s/d</i> {val.dstrakhir.split('T')[0]}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-graduation-cap"></i>
                                            &nbsp;&nbsp;
                                            {val.duniv}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-star"></i>
                                            &nbsp;&nbsp;
                                            {val.drating}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 col-lg-4 mb-5'>
                            <div className="single_blog_item">
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>Praktek</h3>
                                        <hr></hr>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                            &nbsp;&nbsp;
                                            {val.rsnama}
                                            &nbsp;&nbsp;  
                                            <i style={{color:'orange'}} class="fas fa-layer-group"></i>
                                            &nbsp;&nbsp;
                                            <i>{val.rsjenis} Kelas {val.rskelas}</i>
                                            &nbsp;&nbsp;
                                            <i style={{color:'orange'}} class="fas fa-star"></i>
                                            &nbsp;&nbsp;
                                            {val.rsrating}
                                            &nbsp;&nbsp;
                                        </h5>
                                        <h5 className='mb-3'>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {val.rsalamat}
                                        </h5>
                                        <h5 className='mb-3'>
                                            <i style={{color:'orange'}} class="fas fa-calendar-plus"></i>
                                            &nbsp;&nbsp;
                                            {val.djadwal}
                                            &nbsp;&nbsp;
                                            <i style={{color:'orange'}} class="fas fas fa-clock"></i>
                                            &nbsp;&nbsp;
                                            {val.djam}
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