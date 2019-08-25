import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'

class PasienAntri extends Component{
    
    constructor(){
        super()
        this.state = {
            antrian: [],
            periksa: '', diagnosa: '', tindakan: '', alergi: '', resep: '', kesimpulan:'', kondisi:'',
            rekmed: '6969Lintang'
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        var url = `http://localhost:1234/pantridok/${this.props.match.params.str}`
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                antrian: x.data,
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }

    periksa = (e) => {
        this.setState({periksa: e.target.value});
    }
    diagnosa = (e) => {
        this.setState({diagnosa: e.target.value});
    }
    tindakan = (e) => {
        this.setState({tindakan: e.target.value});
    }
    alergi = (e) => {
        this.setState({alergi: e.target.value});
    }
    resep = (e) => {
        this.setState({resep: e.target.value});
    }
    kesimpulan = (e) => {
        this.setState({kesimpulan: e.target.value});
    }
    kondisi = (e) => {
        this.setState({kondisi: e.target.value});
    }
    postRekamMedis = (x) => {
        var url = 'http://localhost:1234/pantrisudah'
        axios.post(url, {
            pano: x,
            padstr: this.props.user.dstr
        }).then((x)=>{
            var url = 'http://localhost:1234/rekmed'
            axios.post(url, {
                rmno: this.state.rekmed,
                dstr: this.props.user.dstr,
                periksa: this.state.periksa,
                diagnosa: this.state.diagnosa,
                tindakan: this.state.tindakan,
                alergi: this.state.alergi,
                resep: this.state.resep,
                kesimpulan: this.state.kesimpulan,
                kondisi: this.state.kondisi
            }).then((x)=>{
                window.location.replace(`pantridok/${this.props.user.dstr}`)
            }).catch((x)=>{
                alert('GAGAL BRO! 😭😭😭😭😭😭😭😭😭😭😭')
            })
        }).catch((x)=>{
            alert('GAGAL BRO! 😭😭😭😭😭😭😭😭😭😭😭')
        })
    }

    render(){

        var myAntri = this.state.antrian.map((val, i)=>{
            return (
                <div class="card mb-1">
                    <div className="card-header bg-primary text-white" id={`head`+String(i)}>
                    <h2 className="mb-0">
                        <button style={{color:'white'}} className="btn" type="button" data-toggle="collapse" data-target={`#col`+String(i)} 
                        aria-expanded="false" aria-controls='col1'>
                            No. Antrian
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-sort-amount-down"></i>
                            &nbsp;&nbsp;{val.pano}
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-user-md"></i>
                            &nbsp;&nbsp;{val.pnama}
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
                            <i style={{color:'orange'}} class="fas fa-check"></i>
                            &nbsp;&nbsp;{val.pastatus} diperiksa
                            &nbsp;&nbsp;
                            <i style={{color:'orange'}} class="fas fa-book-medical"></i>
                            <a href={`/rekmed/6969Lintang`}>
                                &nbsp;&nbsp;Rekam medis
                                &nbsp;&nbsp;
                            </a>
                        </h4>
                        <h4>
                            <i style={{color:'orange'}} class="fas fa-procedures"></i>
                            &nbsp;&nbsp;{val.pakeluhan}
                            &nbsp;&nbsp;
                        </h4>
                        <hr></hr>
                        
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Pemeriksaan</span>
                        </div>
                        <textarea value={this.state.periksa} onChange={this.periksa} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Diagnosa</span>
                        </div>
                        <textarea value={this.state.diagnosa} onChange={this.diagnosa} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Tindakan</span>
                        </div>
                        <textarea value={this.state.tindakan} onChange={this.tindakan} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Alergi</span>
                        </div>
                        <textarea value={this.state.alergi} onChange={this.alergi} class="form-control" aria-label="periksa"></textarea>
                        </div>
                        
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Resep</span>
                        </div>
                        <textarea value={this.state.resep} onChange={this.resep} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Kesimpulan</span>
                        </div>
                        <textarea value={this.state.kesimpulan} onChange={this.kesimpulan} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Kondisi Out</span>
                        </div>
                        <textarea value={this.state.kondisi} onChange={this.kondisi} class="form-control" aria-label="periksa"></textarea>
                        </div>

                        <button value={val.pano} onClick={(e)=>{this.postRekamMedis(e.target.value)}} 
                        className='btn btn-primary btn-block btn-lg'>
                            Selesai
                        </button>

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
                        <h3>{this.props.user.dnama}</h3>
                        {/* <h3>{this.props.match.params.ktp}</h3> */}
                        <hr></hr>
                        <p className='mb-3'>
                            <i style={{color:'orange'}} class="fas fa-id-card"></i>
                            &nbsp;&nbsp;
                            <i style={{fontWeight:'lighter'}}>STR:</i> {this.props.user.dstr}
                            &nbsp;&nbsp;
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

                        {myAntri}

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

export default PasienAntri