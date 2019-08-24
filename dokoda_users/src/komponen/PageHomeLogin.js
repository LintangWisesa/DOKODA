import React, { Component } from 'react'
import BannerHome from './LandingPage/BannerHome'
import VideoTentang from './LandingPage/VideoTentang'
import DaftarDokter from './LandingPage/DaftarDokter'
import CarouselTestimoni from './LandingPage/CarouselTestimoni'
import Footer from './LandingPage/Footer'

class PageHome extends Component{
    render(){
        return(
        <div>
            <BannerHome/>
            {/* <VideoTentang/>      */}
            {/* <DaftarDokter/> */}
            <CarouselTestimoni/>
            <Footer/>
        </div>
        )
    }
}

export default PageHome