import React, { Component } from 'react'

class BannerHome extends Component{
    render(){
        return(
        // {/* banner */}
        <section  id="beranda" className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-xl-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <span style={{fontSize: "56px", marginBottom: "0px"}}>Antri tanpa Menanti</span>
                            <br/>
                            <span style={{fontSize: "49px", marginTop: "0px"}}>Melayani sepenuh hati</span>
                            <a href="#tentang" className="btn_2">
                                Lebih lanjut&nbsp;&nbsp;
                                <i style={{color: 'white'}} className="fas fa-angle-double-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        )
    }
}

export default BannerHome