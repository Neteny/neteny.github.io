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
                                        <div id="carousel" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#carousel" data-slide-to="1"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div>
                                                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                        <span className="la la-angle-left rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                        <span className="la la-angle-right rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                    </a>
                                                </div>
                                                <div className="mx-auto">
                                                    <div class="carousel-item active">
                                                        <div class="d-block mx-3">
                                                            <div class="slide-box row text-left">
                                                                <div className="col-md-4 py-3">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="carousel-item">
                                                        <div class="d-block mx-3">
                                                            <div class="slide-box row text-left">
                                                                <div className="col-md-4 py-3">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/sec3/trade-gift-card.png" alt="" className="img-fluid" />
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
                <Footer />
            </div >
        )
    }
}

export default Calculator;
