import React from 'react'

export default function Counter() {
    return (
        <section className="ftco-counter ftco-section img" id="section-counter" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
            <div className="overlay" />
            <div className="container">
                <div className="row d-md-flex align-items-center">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number={705}>0</strong>
                                        <span>Days in Campaign</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number={809}>0</strong>
                                        <span>Dedicated Donors</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number={335}>0</strong>
                                        <span>Winning Awards</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number={35}>0</strong>
                                        <span>Fun Raised</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
