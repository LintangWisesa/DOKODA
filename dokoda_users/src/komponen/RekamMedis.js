import React, { Component } from 'react'
import axios from 'axios'
import Footer from './LandingPage/Footer'

class ProfilDokter extends Component{
    
    constructor(){
        super()
        this.state = {
            rekmed: []
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

    render(){

        var myRekmed = this.state.rekmed.map((val, i)=>{
            return (
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={'#'+i} 
                        aria-expanded="false" aria-controls={i}>
                            Rekam Medis 
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-calendar-plus"></i>
                            &nbsp;&nbsp;{val.rmtime.split('T')[0]}
                            &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-clock"></i>
                            &nbsp;&nbsp;{val.rmtime.split('T')[1].split('.')[0]}
                        </button>
                    </h2>
                    </div>

                    <div id={i} className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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