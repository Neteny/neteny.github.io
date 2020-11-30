import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";
import Footer from "../base/Footer";


export class WhatWeDo extends Component {

    render() {
        console.log(window.location.pathname);
        console.log(window.location.href);
        alert(window.location.pathname)
        return (
            <div>
                <Nav />
                <section id="" className="what_we_do_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto mt-5 pt-5 ">
                                <div data-aos="zoom-out" className="text-center">
                                    <p className="display-4 font-weight-bold text-dark" id="sm_font">Why we do what we do</p>
                                    <p className="text-dark px-lg-5">
                                        <span className="px-lg-5">
                                            At CoinLynk, we recognize the potential Africa possesses in terms of E-commerce, crypto currency and human
                                            resources.
                                            We set out to create the perfect market; A Safe, Secure and Interactive space that can usher
                                            Africa into the Digital Age.
                                       </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 mx-auto text-center" data-aos="zoom-out" data-aos-delay="300">

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
                        <div className="row">

                            <div className="col-md-12 pt-5" data-aos="fade-left" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="static/img/sec3/office.png" alt="" className="img-fluid col-lg-9" />
                                    </div>
                                    <div className="col-md-6 p-lg-3">
                                        <small className="text-primary"><b style={{ color: "#82B1FF" }}>Our Values</b></small>
                                        <p className="h1">
                                            Doing the most
                                        </p>
                                        <p className="pr-lg-5">
                                            <small>
                                                We go the extra mile to give the CoinLynk Standard. From our weekly idea hubs to our immense customer service,
                                                we thrive by pushing the boundaries of thought and innovation to its limit.
                                             </small>
                                        </p>

                                        <div className="text-left pt-4">
                                            <button className="btn btn-sm rounded-pill text-white" id="custom_btn_dark">Get Started <i className="la la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 pt-5" data-aos="fade-right" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-6 order-lg-12">
                                        <img src="static/img/sec3/kite.png" alt="" className="img-fluid col-lg-9" />
                                    </div>
                                    <div className="col-md-6 p-lg-3">
                                        <small className="text-primary"><b style={{ color: "#82B1FF" }}>Our Values</b></small>
                                        <p className="h1">
                                            Innovation
                                        </p>
                                        <p className="pr-lg-5">
                                            <small>
                                                We are always on top of our game to provide our customers with best in class services that make their evryday life easier and ultimately usher Africa into the digital age.
                                             </small>
                                        </p>

                                        <div className="text-left pt-4">
                                            <button className="btn btn-sm rounded-pill text-white" id="custom_btn_dark">Get Started <i className="la la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 pt-5" data-aos="fade-left" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="static/img/sec3/shakeing.png" alt="" className="img-fluid col-lg-9" />
                                    </div>
                                    <div className="col-md-6 p-lg-3">
                                        <small className="text-primary"><b style={{ color: "#82B1FF" }}>Our Values</b></small>
                                        <p className="h1">
                                            Integrity
                                        </p>
                                        <p className="pr-lg-5">
                                            <small>
                                                We have carefully crafted our products and services to serve our customers well at all times. We embrace a
                                                customer-first culture and portray a high level of transparency in all our dealingse.
                                             </small>
                                        </p>

                                        <div className="text-left pt-4">
                                            <button className="btn btn-sm rounded-pill text-white" id="custom_btn_dark">Get Started <i className="la la-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-12 mx-auto text-center">
                                <p className="h2">Meet the team</p>
                                <small className="px-lg-5">
                                    These amazing young minds are the brains behind the organization. <br />
                                    With experience and versatility in every position, we keep growing  <br />from strength to strength.
                                    </small>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center">
                                <ol id="inline_list" className="row">
                                    <li className="col-md-4 pb-3" data-aos="fade-up" data-aos-delay="100">
                                        <div className="text-left">
                                            <img src="static/img/sec3/dude.png" alt="" className="img-fluid" />
                                            <figcaption>
                                                <b className="h5">Anthony Mackie</b>
                                                <br />
                                                <small>Founder, CEO</small>
                                            </figcaption>
                                        </div>
                                    </li>
                                    <li className="col-md-4 pb-3" data-aos="fade-up" data-aos-delay="200">
                                        <div className="text-left">
                                            <img src="static/img/sec3/babe.png" alt="" className="img-fluid" />
                                            <figcaption>
                                                <b className="h5">Margaret Thatcher</b>
                                                <br />
                                                <small>Chief Operating Officer</small>


                                            </figcaption>
                                        </div>
                                    </li>
                                    <li className="col-md-4 pb-3" data-aos="fade-up" data-aos-delay="300">
                                        <div className="text-left">
                                            <img src="static/img/sec3/man.png" alt="" className="img-fluid" />
                                            <figcaption>
                                                <b className="h5">Sam Register</b>
                                                <br />
                                                <small>Chief Product Officer</small>
                                            </figcaption>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default WhatWeDo;
