import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <footer id="kontak" className="footer-area">
                
                <div className="footer section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                                <h4>Menu 1</h4>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                    <li><a href="#">Sub Menu 6</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                                <h4>Menu 2</h4>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                    <li><a href="#">Sub Menu 6</a></li>
                                </ul>
                            </div>

                            <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                                <h4>Menu 3</h4>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                    <li><a href="#">Sub Menu 6</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                                <h4>Menu 4</h4>
                                <ul>
                                    <li><a href="#">Sub Menu 1</a></li>
                                    <li><a href="#">Sub Menu 2</a></li>
                                    <li><a href="#">Sub Menu 3</a></li>
                                    <li><a href="#">Sub Menu 4</a></li>
                                    <li><a href="#">Sub Menu 5</a></li>
                                    <li><a href="#">Sub Menu 6</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-xl-4 col-sm-8 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                                <h4>Menu 5</h4>
                                <p>lorem ipsum dolor amet ok</p>
                                <div className="form-wrap" id="mc_embed_signup">
                                    <form target="_blank"
                                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get" className="form-inline">
                                        <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Anda ...'"
                                            required="" type="email"/>
                                        <button className="click-btn btn btn-default text-uppercase">subscribe</button>
                                        <div style={{position: "absolute", left: "-5000px"}}>
                                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
                                        </div>

                                        <div className="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright_part">
                    <div className="container">
                        <div className="row align-items-center">
                            <p className="footer-text m-0 col-lg-8 col-md-12">
                            Copyright &copy; 2019 Dokoda 
                            </p>
                            <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"> <i className="ti-twitter"></i> </a>
                                <a href="#"><i className="ti-instagram"></i></a>
                                <a href="#"><i className="ti-skype"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer