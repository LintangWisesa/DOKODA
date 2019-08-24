import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class DaftarRS extends Component{
    
    constructor(){
        super()
        this.state = {
            dataDokter: []
        }
    }

    componentDidMount(){
        var url = 'http://localhost:1234/rumahsakit'
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                dataDokter: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    
    render(){

        var listRS = this.state.dataDokter.map((val, i)=>{
            return (
                <div key={i} className="col-sm-6 col-lg-3 mb-5">
                    <Link to={`/rs/${val.rskode}`}>
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
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>{val.rsnama}</h3>
                                <p>
                                    <i style={{color:'orange'}} class="fas fa-clinic-medical"></i>
                                    &nbsp;&nbsp;{val.rsjenis}&nbsp;&nbsp;
                                    Kelas {val.rskelas}
                                </p>
                                <i style={{color:'orange'}} class="mt-3 fas fa-star"></i>
                                &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>
                                    {val.rsrating}
                                </span>
                                &nbsp;&nbsp;<i style={{color:'orange'}} class="fas fa-map-marker-alt"></i>
                                &nbsp;&nbsp;<span style={{fontStyle:'italic'}}>
                                    {val.rskabkota}
                                </span> 
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        })

        return(
            <section id="status" className="doctor_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section_tittle text-center">
                                {/* <h2>Status Antrian</h2> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        {listRS}

                    </div>
                </div>
            </section>
        )
    }
}

export default DaftarRS