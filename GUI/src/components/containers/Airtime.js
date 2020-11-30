import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";
import Footer from "../base/Footer";

export class Airtime extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="control" className="home" style={{ height: "32em", overflow: "hidden" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 pt-5">
                                <div data-aos="zoom-out" id="home_sec_tag">
                                    <h1 className="">  Excess airtime? No problem</h1>
                                    <p className="text-white">CoinLynk helps you convert your airtime back to cash.
                                           </p>
                                    <div className="text-center text-lg-left">
                                        <Link to="" className="btn text-white btn-sm" id="custom_btn_dark">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" data-aos="fade-down" data-aos-delay="300">
                                <img src="static/img/home-moble-photo.png" className="img-fluid animated col-lg-9" alt="" />
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
                <section>
                    <div className="container">
                        <div className="row" data-aos="fade-down" data-aos-delay="100">
                            <div className="col-12 mx-auto text-center">
                                <p className="h2">Convert excess airtime to <br /> cash in three easy steps</p>
                                <small>Bitcoin rates may fluctuate but our services never will.</small>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row" data-aos="fade-down" data-aos-delay="100">
                            <div className="col-md-12 mx-auto text-center">
                                <ol id="inline_list" className="row">
                                    <li className="col-md-4 pb-3">
                                        <div className="text-left p-lg-5">
                                            <p> <span className="rounded-circle border border-dark px-2 py-1">1</span></p>
                                            <p className="font-weight-bold">Signup</p>
                                            <small>Begin your journey by signing up on Africa’s largest crypto platform.</small>
                                        </div>
                                    </li>
                                    <li className="col-md-4 pb-3">
                                        <div className="text-left p-lg-5">
                                            <p> <span className="rounded-circle border border-dark px-2 py-1">2</span></p>
                                            <p className="font-weight-bold">View rates</p>
                                            <small>Select airtime to cash and choose your network/amount from the dropdown menu.</small>
                                        </div>
                                    </li>
                                    <li className="col-md-4 pb-3">
                                        <div className="text-left p-lg-5">
                                            <p> <span className="rounded-circle border border-dark px-2 py-1">3</span></p>
                                            <p className="font-weight-bold">Convert</p>
                                            <small>Select an account for your cash to be credited or keep it on your Patricia Bitcoin wallet.</small>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="static/img/sec3/convert-to-access.png" alt="" className="img-fluid col-lg-10" />
                                    </div>
                                    <div className="col-md-6 p-lg-3">
                                        <p className="h1">
                                            Safe and Convenient Exchange
                                        </p>
                                        <small>Patricia helps you convert your airtime to cash safely and smoothly. All payouts are automated and transactions are secured from end-to-end.</small>
                                        <div className="text-left p-4">
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

export default Airtime;
