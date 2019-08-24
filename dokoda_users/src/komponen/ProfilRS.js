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
    
    ambilAntrian = (nomor, pktp, keluhan) => {
        alert(this.state.dokter[nomor].dstr + pktp + keluhan)
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
            var lingkaranStatus = (
                val.dastatus == 'on' ? 'lime' :        // if 'on' 
                val.dastatus == 'rest' ? 'orange' :    // else if 'rest' 
                'lightcoral'                            // else 'off'
            )
            return (
                <div key={i} className="col-sm-6 col-lg-3 mb-5">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <Link to={`/dok/${val.dstr}`}>
                                <img src={val.dfoto} alt="doctor"/>
                                <svg height="100" width="100" style={{position: "absolute", top: "-30px", left: "-30px", fontSize: "50px"}}>
                                    <circle cx="50" cy="50" r="30" stroke={lingkaranStatus} stroke-width="3" fill={lingkaranStatus} />    
                                    <text style={{fontSize: "35px"}} fill="white" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                                        {val.dano}
                                    </text>
                                </svg>
                            </Link>
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
                                <br></br>
                                <button 
                                data-toggle="modal" data-target="#ambilAntri" value={i} ref='tombol'
                                onClick={(e)=>{this.setState({opsi: e.target.value})}}
                                className="my-3 btn btn-small btn-primary btn-block">
                                    Ambil Antrian
                                </button>
                            </div>
                        </div>
                    </div>
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

            {/* modal ambil antrian */}
            <div style={{marginTop:'150px'}} className="modal fade" id="ambilAntri" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">
                                <i className="fas fa-user"></i>
                                &nbsp;&nbsp;
                                {this.props.user.pnama}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="fas fa-id-card"></i>
                                &nbsp;&nbsp;
                                <i style={{fontWeight:'lighter'}}>KTP:</i>
                                &nbsp;{this.props.user.pktp}
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><b>Keluhan Pasien</b></label>
                            <textarea ref='keluhan' class="form-control" placeholder='Sampaikan keluhan Anda...' id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Batal
                            </button>
                            <button 
                            onClick={(e)=>{this.ambilAntrian(this.state.opsi, this.props.user.pktp, this.refs.keluhan.value)}}
                            className="btn btn-primary">
                                Ambil Antrian
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProfilRS