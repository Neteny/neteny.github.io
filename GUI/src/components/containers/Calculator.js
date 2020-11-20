import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from "../base/Nav";
import Footer from "../base/Footer";

export class Calculator extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="calculator_page" style={{ fontFamily: "system-ui" }}>
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="mx-auto pt-5">
                                <div data-aos="zoom-out">
                                    <p className="text-white h1" id="prod_page_top">
                                        Fast and Trusted <br /> Giftcard Transactions
                                         </p>
                                    <p className="pt-3">
                                        <small className="text-white">
                                            Buy or Sell Giftcards at the best rates in the world.
                                        </small>
                                    </p>
                                    <div className="text-center">
                                        <Link to="" className="btn text-white btn-sm" id="custom_btn_dark">Get Started</Link>
                                    </div>
                                    <div className="text-center">
                                        <div id="carousel" className="carousel slide" data-ride="carousel">
                                            {/* <ol className="carousel-indicators">
                                                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                                <li data-target="#carousel" data-slide-to="1"></li>
                                            </ol> */}

                                            <div className="carousel-inner">
                                                <div>
                                                    {/* <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                        <span className="la la-angle-left rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                        <span className="la la-angle-right rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                    </a> */}
                                                </div>
                                                <div className="col-sm-12 mx-auto">
                                                    <div className="carousel-item active">
                                                        <div className="d-block mx-3">
                                                            <div className="slide-box row text-left">
                                                                <div className="col-md-3 py-3">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <div className="d-block mx-3">
                                                            <div className="slide-box row text-left">
                                                                <div className="col-md-3 py-3">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#f4c1a3" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#ec8e72" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#f3bea1" />
                        </g>
                    </svg>
                </section>

                <section>
                    <div className="container">
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-12 mx-auto text-center">
                                <p className="h1">Giftcard rate calculator</p>
                                <small>Please note that these rates may be subject to change.</small>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-10 mx-auto text-center border py-4" style={{ borderRadius: '1em', boxShadow: 0 }}>
                                <div className="row">
                                    <div className="col-md-6">

                                        <ul className="nav nav-tabs md-tabs nav-justified p-2 my-1" role="tablist" style={{ backgroundColor: 'white' }}>
                                            <li className="nav-item">
                                                <a className="nav-link active border-bottom text-dark" data-toggle="tab" href="#panel555" role="tab">
                                                    Sell</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link border-bottom text-dark" data-toggle="tab" href="#panel666" role="tab">
                                                    Buy
                                                    </a>
                                            </li>
                                        </ul>



                                        <div className="tab-content">
                                            <div className="tab-pane fade in show active" id="panel555" role="tabpanel" style={{ backgroundColor: 'white' }}>
                                                <div className="row">

                                                </div>
                                            </div>



                                            <div className="tab-pane fade" id="panel666" role="tabpanel" style={{ backgroundColor: 'white' }}>


                                            </div>


                                        </div>

                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default Calculator;
