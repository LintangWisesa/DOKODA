import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import SimpleStorage from "react-simple-storage";

// route page
import PageHome from './komponen/PageHome'
import PageHomeLogin from './komponen/PageHomeLogin'
import PageListDok from './komponen/PageListDok'
import ProfilDokter from './komponen/ProfilDokter'
import ProfilPasien from './komponen/ProfilPasien'
import PageListRS from './komponen/PageListRS'
import ProfilRS from './komponen/ProfilRS'

class App extends Component{

    constructor(){
        super()
        this.state = {
            user: '',
            login: 'no'
        }
    }

    componentDidMount(){
    }

    loginPasien = () => {
        // alert(this.refs.pemail.value + this.refs.ppassword.value)
        var url = 'http://localhost:1234/plogin'
        axios.post(url, {
            pemail: this.refs.pemail.value,
            ppassword: this.refs.ppassword.value
        }).then((x)=>{
            if (x.data.login != 'no'){
                this.setState({
                    login: 'okpas',
                    user: x.data
                })
                window.location.replace("/")
            } else {
                alert('Email/password salah!')
            }
        }).catch((x)=>{
            console.log(x)
        })
    }

    loginDokter = () => {
        // alert(this.refs.demail.value + this.refs.dpassword.value)
        var url = 'http://localhost:1234/dlogin'
        axios.post(url, {
            demail: this.refs.demail.value,
            dpassword: this.refs.dpassword.value
        }).then((x)=>{
            if (x.data.login != 'no'){
                this.setState({
                    login: 'okdok',
                    user: x.data
                })
                window.location.replace("/")
            } else {
                alert('Email/password salah!')
            }
        }).catch((x)=>{
            console.log(x)
        })
    }

    logout = ()=>{
        this.setState({
            user: '',
            login: 'no'
        })
        window.location.replace("/")
    }

    render(){

        let header
        if(this.state.login == 'okdok'){
            header = (
                <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/"> <img src="/img/logo.png" alt="logo"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#beranda">Beranda</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/rumahsakit">RS Mitra</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#kontak">Antrian</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown_1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <button className='btn btn-primary'>
                                                    <img style={{marginRight:'10px'}} height='35px' width='30px' 
                                                    src={this.state.user.dfoto} className="rounded" alt="profil"></img>
                                                    {this.state.user.dnama}&nbsp;
                                                </button>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href={`/dok/${this.state.user.dstr}`}>
                                                    <i className="fas fa-user"></i>
                                                    &nbsp;
                                                    Profil Saya
                                                </a>
                                                <a className="dropdown-item" onClick={this.logout}>
                                                    <i class="fas fa-sign-out-alt"></i>
                                                    &nbsp;
                                                    Logout
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </header>
            )
        } else if (this.state.login == 'okpas'){
            header = (
                <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/"> <img src="/img/logo.png" alt="logo"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#beranda">Beranda</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/rumahsakit">RS Mitra</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/dokter">Dokter</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#kontak">Rekam Medisku</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown_1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <button className='btn btn-primary'>
                                                    <img style={{marginRight:'10px'}} height='35px' width='30px' 
                                                    src={this.state.user.pfoto} className="rounded" alt="profil"></img>
                                                    {this.state.user.pnama}&nbsp;
                                                </button>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href={`/user/${this.state.user.pktp}`}>
                                                    <i className="fas fa-user"></i>
                                                    &nbsp;
                                                    Profil Saya
                                                </a>
                                                <a className="dropdown-item" onClick={this.logout}>
                                                    <i class="fas fa-sign-out-alt"></i>
                                                    &nbsp;
                                                    Logout
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </header>
            )
        } else {
            header = (
                <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/"> <img src="/img/logo.png" alt="logo"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#beranda">Beranda</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tentang">Tentang</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#status">Status Antrian</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#kontak">Kontak</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown_1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Signup&nbsp;
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href="#dpasien">
                                                    <i className="fas fa-user"></i>
                                                    &nbsp;
                                                    Pasien Signup
                                                </a>
                                                <a className="dropdown-item" href="#ddokter">
                                                    <i className="fas fa-stethoscope"></i>
                                                    &nbsp;
                                                    Dokter Signup
                                                </a>
                                                <a className="dropdown-item" href="#dmitra">
                                                    <i className="fas fa-clinic-medical"></i>
                                                    &nbsp;
                                                    Mitra Signup
                                                </a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown_1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Login&nbsp;
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href="#dpasien">
                                                    <i className="fas fa-user"></i>
                                                    &nbsp;
                                                    Pasien Login
                                                </a>
                                                <a className="dropdown-item" href="#ddokter">
                                                    <i className="fas fa-stethoscope"></i>
                                                    &nbsp;
                                                    Dokter Login
                                                </a>
                                                <a className="dropdown-item" href="#dmitra">
                                                    <i className="fas fa-clinic-medical"></i>
                                                    &nbsp;
                                                    Mitra Login
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </header>
            )
        }

        return (
            <div>

                <SimpleStorage parent={this} />
                {header}
        
                <div>
                    <Route exact path="/" component={(this.state.login != 'no') ? PageHomeLogin : PageHome}/>
                    {/* <Route path="/dokter" component={PageListDok}/> */}
                    <Route path="/dokter" render={(props) => <PageListDok {...props} user={this.state.user} />}/>
                    <Route path="/dok/:str" component={ProfilDokter}/>
                    <Route path="/user/:ktp" component={ProfilPasien}/>
                    <Route path="/rumahsakit" component={PageListRS}/>
                    <Route path="/rs/:kode" component={ProfilRS}/>
                </div>
        
        
                {/* modal pasien Login */}
                <div style={{marginTop:'100px'}} className="modal fade" id="PasienLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">
                                <i className="fas fa-user"></i>
                                &nbsp;
                                Pasien Login
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input ref='pemail' type="text" class="form-control" placeholder="Email Pasien ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                                <input ref='ppassword' type="text" class="form-control" placeholder="Password ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Batal
                            </button>
                            <button onClick={this.loginPasien} 
                            type="button" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
        
                {/* modal dokter Login */}
                <div style={{marginTop:'100px'}} className="modal fade" id="DokterLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">
                                <i className="fas fa-stethoscope"></i>
                                &nbsp;
                                Dokter Login
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input ref='demail' type="text" class="form-control" placeholder="Email Dokter ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                                <input ref='dpassword' type="text" class="form-control" placeholder="Password ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Batal
                            </button>
                            <button onClick={this.loginDokter} 
                            type="button" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
        
                {/* modal mitra Login */}
                <div style={{marginTop:'100px'}} className="modal fade" id="MitraLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">
                                <i className="fas fa-clinic-medical"></i>
                                &nbsp;
                                Mitra Login
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Email RS/klinik mitra ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Password ..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Batal
                            </button>
                            <button type="button" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
        
            </div>
        );
    }
}

export default App;
