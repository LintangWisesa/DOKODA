import React, { Component } from 'react'
import DaftarRS from './ListRumahSakit/DaftarRS'
import Footer from './ListRumahSakit/Footer'

class PageListRS extends Component{
    
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
        <div>
            <DaftarRS/>
            <Footer/>
        </div>
        )
    }
}

export default PageListRS