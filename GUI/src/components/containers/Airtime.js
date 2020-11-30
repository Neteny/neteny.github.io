import React, { Component } from 'react';

export class Airtime extends Component {
    render() {
        return (
            <div>

                <section id="control" className="home">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-5 pt-5">
                                <div data-aos="zoom-out" id="home_sec_tag">
                                    <h1 className="">  Some call it  <br /> magic, we call   <br /> it convenience.</h1>
                                    <p className="text-white">Buy bitcoin and other digital currencies with a debit or credit card
                                    from a leading cryptocurrency exchange platform simply, securely
                                    and without the wait.
                                           </p>
                                    <div className="text-center text-lg-left">
                                        <Link to="" className="btn text-white btn-sm" id="custom_btn_dark">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/homeanchor.png" className="img-fluid animated home_img" alt="" />
                            </div>
                        </div>
                    </div>

                    <svg className="hero-waves"
                        xmlns=""
                        xmlnsXlink=""
                        viewBox="0 24 200 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#b57afc" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#2c71fc" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#62c8f8" />
                        </g>

                    </svg>

                </section>

            </div>
        )
    }
}

export default Airtime;
