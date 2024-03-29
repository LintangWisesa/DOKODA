import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'

class ProfilDokter extends Component{
    
    constructor(){
        super()
        this.state = {
            rekmed: [],
            star: ''
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        var url = `http://localhost:1234/rekmed/${this.props.match.params.prekmed}`
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                rekmed: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }

    handleChange = (event) => {
        this.setState({star: event.target.value});
    }

    kirimRating = (dstr)=>{
        var rating = this.state.star
        var url = 'http://localhost:1234/rating'
        axios.post(url, {
            dstr: dstr,
            pktp: this.props.user.pktp,
            rating: rating
        }).then((x)=>{
            alert('SUKSESSSSS! ⭐⭐⭐⭐⭐')
            window.location.replace(`/rekmed/${this.props.user.prekmed}`)
        }).catch((x)=>{
            alert('GAGAL BERI RATING! ⭐⭐⭐⭐⭐')
        })
    }

    render(){

        var myRekmed = this.state.rekmed.map((val, i)=>{
            return (
                <div class="card mb-1">
                    <div className="card-header bg-primary text-white" id={`head`+String(i)}>
                    <h2 className="mb-0">
                        <button style={{color:'white'}} className="btn" type="button" data-toggle="collapse" data-target={`#col`+String(i)} 
                        aria-expanded="false" aria-controls='col1'>
                            Rekam Medis 
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-calendar-plus"></i>
                            &nbsp;&nbsp;{val.rmtime.split('T')[0]}
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-clock"></i>
                            &nbsp;&nbsp;{val.rmtime.split('T')[1].split('.')[0]}
                        </button>
                    </h2>
                    </div>

                    <div id={`col`+String(i)} className="collapse" aria-labelledby={`head`+String(i)} data-parent="#accordionExample">
                    <div className="card-body">
                        <h4>
                            Diperiksa oleh:
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-stethoscope"></i>
                            &nbsp;&nbsp;{val.dnama}
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                            &nbsp;&nbsp;{val.rsnama}
                            &nbsp;&nbsp;
                        </h4>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-sm-4 col-lg-4'>
                                <h5>Pemeriksaan</h5>
                                <p>{val.rmperiksa}</p>
                                <hr></hr>
                                <h5>Diagnosa</h5>
                                <p>{val.rmdiagnosa}</p>
                                <hr></hr>
                                <h5>Tindakan</h5>
                                <p>{val.rmtindakan}</p>
                            </div>
                            <div className='col-sm-4 col-lg-4'>
                                <h5>Alergi</h5>
                                <p>{val.rmalergi}</p>
                                <hr></hr>
                                <h5>Resep</h5>
                                <p>{val.rmresep}</p>
                            </div>
                            <div className='col-sm-4 col-lg-4'>
                                <h5>Kesimpulan</h5>
                                <p>{val.rmkesimpulan}</p>
                                <hr></hr>
                                <h5>Diagnosa</h5>
                                <p>{val.rmkondisiout}</p>
                                <div className='row'>
                                    <div class="col-sm-4 my-5 input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control" value={this.state.star} onChange={this.handleChange}
                                        placeholder=". . ." aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <button value={val.dstr} onClick={(e)=>{this.kirimRating(e.target.value)}} className='col-sm-8 my-5 btn btn-primary btn-block'>
                                        Beri Rating
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })

        return(
            <div style={{marginTop: '100px'}}>
            
            <div className='container' style={{marginTop: '200px'}}>
            <div className="single_blog_item">
                <div className="single_text">
                    <div className="single_blog_text">
                        <h3>{this.props.user.pnama}</h3>
                        <hr></hr>
                        <p className='mb-3'>
                            <i style={{color:'orange'}} class="fas fa-id-card"></i>
                            &nbsp;&nbsp;
                            <i style={{fontWeight:'lighter'}}>KTP:</i> {this.props.user.pktp}
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-id-card"></i>
                            &nbsp;&nbsp;
                            <i style={{fontWeight:'lighter'}}>BPJS:</i> {this.props.user.pbpjs}
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-venus-mars"></i>
                            &nbsp;&nbsp;
                            {this.props.user.psex}
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-book-medical"></i>
                            &nbsp;&nbsp;
                            <i style={{fontWeight:'lighter'}}>Medical Record:</i> {this.props.user.prekmed}
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
            <section style={{marginTop:0, marginBottom:'100px'}} 
            id="status" className="doctor_part">
                <div className="container">
                    
                <div className="col-sm-12 col-lg-12 mb-0">
                    <div className="single_blog_text">
                        <div class="accordion" id="accordionExample">

                        {myRekmed}

                        </div>
                    </div>
                </div>
                    
                </div>
            </section>

            <Footer/>
            </div>
        )
    }
}

export default ProfilDokter