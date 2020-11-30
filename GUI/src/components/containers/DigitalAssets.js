import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";
import Footer from "../base/Footer";


export class DigitalAssets extends Component {
    render() {
        return (
            <div style={{ fontFamily: "system-ui" }}>
                <Nav />
                <section id="" className="digital_asset_page_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto mt-5 pt-5 pb-3">
                                <div data-aos="zoom-out" className="text-center">
                                    <p className="display-3 font-weight-bold text-white" id="sm_font">Digital assets for <br /> your everyday needs</p>
                                    <p className="text-white">Get access to all your favorite forms of money, from BTC to PayPal, Payoneer<br /> and Perfect Money. With Patricia, you would never miss a penny. </p>
                                    <div className="text-center">
                                        <Link to="" className="text-white btn btn-sm" id="custom_btn_dark">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mx-auto text-center" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/sec3/digitalasst.png" className="img-fluid animated" alt="" />
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
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#fbde80a6" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#f95a879c" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#c864c98c" />
                        </g>

                    </svg>
                </section>
                <section>
                    <div className="container">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-12 mx-auto text-center">
                                <small className="text-warning"><b>Trade Digital Assets</b></small>
                                <p className="h2">Instant transactions on all platforms</p>
                                <small>All payments are fast, secure and seamless. Receive and send <br /> digital assets instantly.</small>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-md-3">
                                <div className="card p-3">
                                    <div className="text-left">
                                        <img src="static/img/icons/btc.png" alt="" className="img-fluid rounded-circle" style={{ width: "27%" }} />
                                    </div>
                                    <p className="h5 py-3">Bitcoin</p>
                                    <small>Buy, send, sell or store bitcoin all from one super secure wallet.</small>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card p-3">
                                    <div className="text-left">
                                        <img src="static/img/icons/pm.png" alt="" className="img-fluid rounded-circle" style={{ width: "27%" }} />
                                    </div>
                                    <p className="h5 py-3">Perfect Money</p>
                                    <small>Buy, send, sell or store bitcoin all from one super secure wallet.</small>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card p-3">
                                    <div className="text-left">
                                        <img src="static/img/icons/pp.png" alt="" className="img-fluid rounded-circle" style={{ width: "27%" }} />
                                    </div>
                                    <p className="h5 py-3">Paypal funds</p>
                                    <small>Buy, send, sell or store bitcoin all from one super secure wallet.</small>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card p-3">
                                    <div className="text-left">
                                        <img src="static/img/icons/plus.png" alt="" className="img-fluid rounded-circle" style={{ width: "27%" }} />
                                    </div>
                                    <p className="h5 py-3">Other cryptos</p>
                                    <small>Buy, send, sell or store bitcoin all from one super secure wallet.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-right" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-6 order-lg-12">
                                        <img src="static/img/sec3/girls.png" alt="" className="img-fluid col-lg-10" />
                                    </div>
                                    <div className="col-md-6">
                                        <p className="h1 p-lg-3">
                                            The pathway to financial freedom
                                        </p>
                                        <small>With the new and expanded digital assets available,
                                        you now have access to funds from all around the world.
                                        Become a part of the financial evolution with Patricia.
                                             </small>
                                        <div className="text-left">
                                            <button className="btn btn-primary btn-sm rounded-pill">Get Started <i className="la la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 pt-5" data-aos="fade-left" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="static/img/refill/refill-2.png" alt="" className="img-fluid col-lg-10" />
                                    </div>
                                    <div className="col-md-6">
                                        <p className="h1 p-lg-3">
                                            The Future is within your Reach
                                        </p>
                                        <small>Patricia enables you experience the future of seamless online payments and fund transfer through digital assets.
                                             </small>
                                        <div className="text-left">
                                            <button className="btn btn-primary btn-sm rounded-pill">Get Started <i className="la la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default DigitalAssets;
