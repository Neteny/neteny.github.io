import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from "../base/Nav";
import Footer from "../base/Footer";


export class ProductPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="product_page" style={{ fontFamily: "system-ui" }}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-10 mx-auto pt-5">
                                <div data-aos="zoom-out">
                                    <p className="text-white h1" id="prod_page_top">
                                        Products tailored to <br /> give you the best
                                         </p>
                                    <p className="pt-3">
                                        <small className="text-white">
                                            CoinLynk uses the power of blockchain and cryptocurrency to <br /> solve your everyday needs.
                                        </small>
                                    </p>
                                    <div className="text-center">
                                        <Link to="" className="rounded-pill btn btn-dark"
                                            style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}>
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
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
                            <div className="col-md-6">
                                <div className="">
                                    <img src="static/img/sec3/trade-gift-card.png" alt="trade-gift-card" className="img-fluid p-5 p-5" />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="text-success"><b>Trade</b></small></p>
                                    <h1>Trade giftcards</h1>
                                    <span>
                                        Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.
                                </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-success">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-6 order-lg-12">
                                <div className="">
                                    <img src="static/img/sec3/trade-data-assets.png" alt="trade-data-assets" className="img-fluid p-5" />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="text-warning"><b>Trade</b></small></p>
                                    <h1>Transact via various digital assets</h1>
                                    <span>
                                        Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.
                                </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-warning text-white">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-6">
                                <div className="">
                                    <img src="static/img/sec3/bit-coin.png" alt="trade-gift-card" className="img-fluid p-5" style={{ height: "30vw" }} />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="text-danger"><b>Trade</b></small></p>
                                    <h1>Buy and sell bitcoin</h1>
                                    <span>
                                        Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.
                                </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-danger">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-6 order-lg-12">
                                <div className="">
                                    <img src="static/img/sec3/exchange-currency.png" alt="trade-data-assets" className="img-fluid p-5" />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="" style={{ color: 'rgb(170 102 204)' }}><b>Exchange</b></small></p>
                                    <h1>Exchange currencies</h1>
                                    <span>Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait. </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-secondary text-white">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-6">
                                <div className="">
                                    <img src="static/img/sec3/coinlink-debit-card.png" alt="trade-gift-card" className="img-fluid p-5" />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="text-info"><b>Debit Card</b></small></p>
                                    <h1>Trade giftcards</h1>
                                    <span>
                                        Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait. </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-info">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-6 order-lg-12">
                                <div className="">
                                    <img src="static/img/sec3/convert-to-access.png" alt="trade-data-assets" className="img-fluid p-5" />
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    <p><small className="text-default" style={{ color: '#a6c' }}><b>Why CoinLynk</b></small></p>
                                    <h1>Trade giftcards</h1>
                                    <span>
                                        Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.
                                </span>
                                    <div>
                                        <Link to="" className="rounded-pill btn btn-default text-white">
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
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

export default ProductPage;
