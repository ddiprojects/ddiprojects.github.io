import React from 'react'

export default function HeroWrap(props) {
    return (
        <div className="hero-wrap" style={{ backgroundImage: 'url("images/bg_4.jpg")' }} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-12 text ftco-animate mt-5 text-center" data-scrollax=" properties: { translateY: '70%' }">
                        {/* <div class="play-video d-flex align-items-center justify-content-center">
                      <a href="https://vimeo.com/45830194" class="popup-vimeo"><span class="icon"><i
                          class="ion-ios-play "></i></span></a>
                  </div> */}
                        <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                            Give A Hand To Make A Better World
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    )
}
