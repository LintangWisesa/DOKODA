import React, { Component } from 'react'
import DaftarDokter from './ListDokter/DaftarDokter'
import Footer from './ListDokter/Footer'

class PageListDok extends Component{

    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
        <div>
            <DaftarDokter user={this.props.user}/>
            <Footer/>
        </div>
        )
    }
}

export default PageListDok