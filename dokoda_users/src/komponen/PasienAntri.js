import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'

class PasienAntri extends Component{
    
    constructor(){
        super()
        this.state = {
            antrian: []
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        var url = `http://localhost:1234/pantri/${this.props.match.params.ktp}`
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                antrian: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
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
                            &nbsp;&nbsp;{val.dnama}
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
                        </h4>
                        <hr></hr>
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
                        {/* <h3>{this.props.match.params.ktp}</h3> */}
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