import React, {Component} from 'react'

class Layanan extends Component{
    render(){
        return(
            <div>
                <section id="dpasien" className="our_ability section_padding  padding_bottom">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="our_ability_img">
                                    <img src="img/ability_img.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="our_ability_member_text">
                                    <h2>Pasien masa kini</h2>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Booking online nomor antrian</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Sampaikan gejala & keluhan</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Pantau online nomor antrian</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Konsultasi dengan dokter kesayangan</li>
                                    </ul>
                                    <a onClick={()=>{alert('Mohon maaf, fitur signup belum tersedia. Tunggu perkembangan kami selanjutnya, atau hubungi customer service kami. 🙏😊')}}  
                                    style={{color:'white', width: "200px", backgroundColor:'gray'}} className="btn_2 btn_daftar">
                                        <i style={{color: "white"}} className="fas fa-user"></i>
                                        &nbsp;
                                        Pasien Signup
                                    </a>
                                    <a data-toggle="modal" data-target="#PasienLogin" 
                                    href="" style={{width: "200px"}} className="mx-3 btn_2 btn_daftar">
                                        <i style={{color: "white"}} className="fas fa-user"></i>
                                        &nbsp;
                                        Pasien Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ddokter" className="top_service our_ability section_padding padding_bottom">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="our_ability_member_text">
                                    <h2>Dokter peduli</h2>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Share status antrian</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Mengetahui keluhan calon pasien</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Cek riwayat medis pasien secara online</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Profesional</li>
                                    </ul>
                                    <a onClick={()=>{alert('Mohon maaf, fitur signup belum tersedia. Tunggu perkembangan kami selanjutnya, atau hubungi customer service kami. 🙏😊')}} 
                                    style={{color:'white', width: "200px", backgroundColor:'gray'}} className="btn_2">
                                        <i style={{color: "white"}} className="fas fa-stethoscope"></i>
                                        &nbsp;
                                        Dokter Signup
                                    </a>
                                    <a data-toggle="modal" data-target="#DokterLogin"
                                    href="" style={{width: "200px"}} className="mx-3 btn_2">
                                        <i style={{color: "white"}} className="fas fa-stethoscope"></i>
                                        &nbsp;
                                        Dokter Login
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="our_ability_img">
                                    <img src="img/top_service.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="dmitra" className="our_ability section_padding  padding_bottom">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="our_ability_img">
                                    <img width="800px" src="img/hospital.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="our_ability_member_text">
                                    <h2>Mitra Dokoda</h2>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Manajemen RS/Klinik digital</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Paperless & ramah lingkungan</li>
                                        <li><i className="fas fa-check-circle"></i> 
                                            &nbsp;Mudah, murah & cepat</li>
                                    </ul>
                                    <a href onClick={()=>{alert('Mohon maaf, fitur signup belum tersedia. Tunggu perkembangan kami selanjutnya, atau hubungi customer service kami. 🙏😊')}}
                                    style={{width: "200px", backgroundColor:'gray', color:'white'}} className="btn_2 btn_daftar">
                                        <i style={{color: "white"}} className="fas fa-clinic-medical"></i>
                                        &nbsp;
                                        Mitra Signup
                                    </a>
                                    <a data-toggle="modal" data-target="#MitraLogin"
                                    href="" style={{width: "200px"}} className="mx-3 btn_2 btn_daftar">
                                        <i style={{color: "white"}} className="fas fa-clinic-medical"></i>
                                        &nbsp;
                                        Mitra Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Layanan