import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Nav from "../base/Nav"


export class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="hero">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div data-aos="zoom-out">
                                    <h1>  Some call it  <br /> magic, we call it  <br />  <span>convenience</span>.</h1>
                                    <p className="text-white">Buy bitcoin and other digital currencies with a debit or credit card<br />
                                         from a leading cryptocurrency exchange platform simply, securely<br />
                                          and without the wait.
                                           </p>
                                    <div className="text-center text-lg-left">
                                        <Link to="" className="btn-get-started scrollto btn-dark" style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}>Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>

                    <svg className="hero-waves"
                        xmlns=""
                        xmlnsXlink=""
                        viewBox="0 24 150 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(9, 250, 77, 0.26)" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(112, 80, 6, 0.493)" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="rgba(0, 195, 255, 0.151)" />
                        </g>

                    </svg>

                </section>
                <main id="main">
                    <section id="about" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-left pb-5" data-aos="fade-right">
                                    <p><small className="text-success"><b>Why CoinLynk</b></small></p>
                                    <h1 className="buy_bit">
                                        Buy bitcoin with a debit card instantly.
                                    </h1>
                                    <p>
                                        We’ll send your bitcoin within 15 minutes of payment approval or your <br /> next transaction fee is free.
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify">
                                    <img src="" alt="" />
                                    <strong>Instant delivery</strong>
                                    <p className="">
                                        We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify">
                                    <img src="" alt="" />
                                    <strong>CoinLynk Guarantee</strong>
                                    <p className="">
                                        We offer a secure and simple way to have your crypto delivered instantly to your wallet.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify">
                                    <img src="" alt="" />
                                    <strong>World-class support</strong>
                                    <p className="">
                                        We have 24/7 live support via instant chat, e-mail and phone so you’re never alone.
                                        </p>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center mx-auto py-5">
                                    <small className="text-success"><b>Why CoinLynk</b></small>
                                    <h2 className="font-weight-bold">Main copy that says <br /> what coinlynk is about</h2>
                                    <p>Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.</p>
                                    <Link to="" className="text-white btn btn-primary rounded-pill mx-2 h6 mt-3">Buy bitcoin <i className="la la-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 text-center">
                                    <div className="my-2" style={{ background: '#60418e1f no-repeat padding-box' }}>
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Digital Assets</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center">
                                    <div className="my-2" style={{ background: '#5470c717 no-repeat padding-box' }}>
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Giftcards</p>
                                            <span>Buy and sell gift cards on the CoinLynk app</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center">
                                    <div className="my-2" style={{ background: 'rgb(0 196 255 / 12%) no-repeat padding-box' }}>
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">CoinLynk debit card</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center">
                                    <div className="my-2" style={{ background: '#fbd8ff6e no-repeat padding-box' }}>
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Exchange currencies</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-5">
                                <div className="col-12 text-left">
                                    <p className="h3"><b>Refill: Use Bitcoin For <br /> Your Daily Transactions</b></p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <img src="" alt="" />
                                        <p className="h5"><b>Airtime Purchase</b></p>
                                        <span>Buy airtime from MTN, Airtel, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <img src="" alt="" />
                                        <p className="h5"><b>Data Subscription</b></p>
                                        <span>Buy internet data from Swift, Airtel, Spectranet, MTN, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <img src="" alt="" />
                                        <p className="h5"><b>Airtime to Cash</b></p>
                                        <span>Bought excess airtime? Convert it to cash with us and get your value back.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row bg-dark text-center">
                                <div className="col-lg-6 col-sm-12 mx-auto">
                                    <img src="" alt="" />
                                    <p><small className="text-success"><b>CoinLynk Guarantee</b></small></p>
                                    <p className="text-white h2">Our Guarantee</p>
                                    <p className="text-white">We will send within 5 minutes of approval or your next transaction is fee-free.</p>
                                    <p className="bg-white rounded-pill">All major credit and debit cards accepted
                                    <img src="" alt="" />
                                    </p>

                                    <div className="row mx-auto text-center">
                                        <div className="col-6">
                                            <Link to="" className="btn btn-success border rounded-pill text-white"><span className="h6">Get Started <i className="la la-angle-right"></i></span></Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="" className="btn btn-none border rounded-pill text-white"><span className="h6">Buy Bitcoin <i className="la la-angle-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-5">
                                <div className="col-12 text-left">
                                    <p><small className="text-success"><b>Testimonials</b></small></p>
                                    <h2>What our customers <br /> are saying</h2>
                                </div>
                                <div className="col-12">
                                    <div class="container">
                                        <div class="row">
                                            <div id="carousel" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carousel" data-slide-to="1"></li>
                                                </ol>
                                                {/*                                                 
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <div class="d-none d-lg-block">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/285/200/?image=0&random" alt="First slide" />
                                                                <img src="https://picsum.photos/285/200/?image=1&random" alt="First slide" />
                                                                <img src="https://picsum.photos/285/200/?image=2&random" alt="First slide" />
                                                                <img src="https://picsum.photos/285/200/?image=3&random" alt="First slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-none d-md-block d-lg-none">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/240/200/?image=0&random" alt="First slide" />
                                                                <img src="https://picsum.photos/240/200/?image=1&random" alt="First slide" />
                                                                <img src="https://picsum.photos/240/200/?image=2&random" alt="First slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-none d-sm-block d-md-none">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/270/200/?image=0&random" alt="First slide" />
                                                                <img src="https://picsum.photos/270/200/?image=1&random" alt="First slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-block d-sm-none">
                                                            <img class="d-block w-100" src="https://picsum.photos/600/400/?image=0&random" alt="First slide" />
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="d-none d-lg-block">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/285/200/?image=4&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/285/200/?image=5&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/285/200/?image=6&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/285/200/?image=7&random" alt="Second slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-none d-md-block d-lg-none">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/240/200/?image=3&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/240/200/?image=4&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/240/200/?image=5&random" alt="Second slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-none d-sm-block d-md-none">
                                                            <div class="slide-box">
                                                                <img src="https://picsum.photos/270/200/?image=2&random" alt="Second slide" />
                                                                <img src="https://picsum.photos/270/200/?image=3&random" alt="Second slide" />
                                                            </div>
                                                        </div>
                                                        <div class="d-block d-sm-none">
                                                            <img class="d-block w-100" src="https://picsum.photos/600/400/?image=1&random" alt="Second slide" />
                                                        </div>
                                                    </div>
                                                </div>
                                                */}
                                                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <Helmet>
                                        <script src="static/js/homeSlider.js" type="text/javascript" />
                                    </Helmet>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home;
