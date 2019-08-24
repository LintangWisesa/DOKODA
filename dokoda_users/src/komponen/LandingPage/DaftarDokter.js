import React, { Component } from 'react'
import { Link } from "react-router-dom"

class DaftarDokter extends Component{
    render(){
        return(
            <section id="status" className="doctor_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section_tittle text-center">
                                <p className='alert alert-primary'>Silakan login untuk mengetahui daftar dokter, RS mitra & status antrian.</p>
                                <p className='row'>
                                    <div className='col-sm-4'>
                                        <svg height="30" width="30">
                                            <circle center cx="15" cy="15" r="10" stroke="lightcoral" stroke-width="3" fill="lightcoral" />
                                        </svg>
                                        &nbsp;Antrian tutup&nbsp;
                                    </div>
                                    <div className='col-sm-4'>
                                        <svg height="30" width="30">
                                            <circle center cx="15" cy="15" r="10" stroke="lime" stroke-width="3" fill="lime" />
                                        </svg>
                                        &nbsp;Antrian dokter aktif&nbsp;
                                    </div>
                                    <div className='col-sm-4'>
                                        <svg height="30" width="30">
                                            <circle center cx="15" cy="15" r="10" stroke="orange" stroke-width="3" fill="orange" />
                                        </svg>
                                        &nbsp;Jeda istirahat&nbsp;
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/doctor/doctor_1.png" alt="doctor"/>
                                    <svg height="100" width="100" style={{position: "absolute", top: "-30px", left: "-30px", fontSize: "50px"}}>
                                        <circle cx="50" cy="50" r="30" stroke="lime" stroke-width="3" fill="lime" />    
                                        <text style={{fontSize: "35px"}} fill="black" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                                            12
                                        </text>
                                    </svg>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                    </div>
                                </div>
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>dr. Andy, Sp.Pd</h3>
                                        <p>
                                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>&nbsp;
                                            Spesialis Penyakit Dalam
                                        </p>
                                        
                                        <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                        &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>5</span>
                                        &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                        &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>RS. Sehat Selalu</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/doctor/doctor_4.png" alt="doctor"/>
                                    <svg height="100" width="100" style={{position: "absolute", top: "-30px", left: "-30px", fontSize: "50px"}}>
                                        <circle cx="50" cy="50" r="30" stroke="lightcoral" stroke-width="3" fill="lightcoral" />    
                                        <text style={{fontSize: "35px"}} fill="white" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                                            0
                                        </text>
                                    </svg>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                        <a href="#"> <i className="ti-instagram"></i> </a>
                                        <a href="#"> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>dr. Budi</h3>
                                        <p>
                                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>&nbsp;
                                            Dokter Umum
                                        </p>
                                        
                                        <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                        &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>5</span>
                                        &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                        &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>RS. Seger Buger</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/doctor/doctor_2.png" alt="doctor"/>
                                    <svg height="100" width="100" style={{position: "absolute", top: "-30px", left: "-30px", fontSize: "50px"}}>
                                        <circle cx="50" cy="50" r="30" stroke="lime" stroke-width="3" fill="lime" />    
                                        <text style={{fontSize: "35px"}} fill="black" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                                            8
                                        </text>
                                    </svg>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                        <a href="#"> <i className="ti-instagram"></i> </a>
                                        <a href="#"> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>dr. Cahyono, Sp.A</h3>
                                        <p>
                                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>&nbsp;
                                            Spesialis Anak
                                        </p>
                                        
                                        <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                        &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>5</span>
                                        &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                        &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>RS. Sehat Selalu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-5">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/doctor/doctor_3.png" alt="doctor"/>
                                    <svg height="100" width="100" style={{position: "absolute", top: "-30px", left: "-30px", fontSize: "50px"}}>
                                        <circle cx="50" cy="50" r="30" stroke="	orange" stroke-width="3" fill="	orange" />    
                                        <text style={{fontSize: "35px"}} fill="white" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                                            26
                                        </text>
                                    </svg>
                                    <div className="social_icon">
                                        <a href="#"> <i className="ti-facebook"></i> </a>
                                        <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                        <a href="#"> <i className="ti-instagram"></i> </a>
                                        <a href="#"> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                                <div className="single_text">
                                    <div className="single_blog_text">
                                        <h3>dr. Denny, Sp.Og</h3>
                                        <p>
                                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>&nbsp;
                                            Spesialis Obstetri & Ginekologi
                                        </p>
                                        
                                        <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                        &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>5</span>
                                        &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                        &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>RS. Seger Buger</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        {/* <Link to='/dokter'>
                        <a href="#" className="btn_1">
                            <i style={{color: "white"}} className="fas fa-search"></i>
                            &nbsp;
                            Lihat selengkapnya
                        </a>
                        </Link> */}
                    </center>
                </div>
            </section>
        )
    }
}

export default DaftarDokter