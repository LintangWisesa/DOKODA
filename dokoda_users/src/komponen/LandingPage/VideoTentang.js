import React, { Component } from 'react'

class VideoTentang extends Component{
    render(){
        return(
        // {/* video */}
        <div id="tentang">
        <section className="intro_video_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro_video_iner text-center">
                            <h2>Tentang Dokoda</h2>
                            <div className="intro_video_icon">
                                <a id="play-video_1" className="video-play-button popup-youtube"
                                    href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                                    <span className="ti-control-play"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

export default VideoTentang