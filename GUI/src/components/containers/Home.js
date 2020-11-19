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
                            <div className="col-lg-6 col-md-6 mt-5 pt-5">
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
                <main id="main">
                    <section id="about" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-left pb-5" data-aos="fade-right" data-aos-delay="50">
                                    <p><small className="text-success"><b>Why CoinLynk</b></small></p>
                                    <h1 className="buy_bit">
                                        Buy bitcoin with a debit card instantly.
                                    </h1>
                                    <p>
                                        We’ll send your bitcoin within 15 minutes of payment approval or your <br /> next transaction fee is free.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section id="" className="about my_font">
                        <div className="container">
                            <div className="row border-top border-bottom py-2" style={{ borderRadius: '2em' }}>
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="50">
                                    <p className="text-left"><i className="ri-timer-flash-line h1 text-primary"></i></p>
                                    <strong>Instant delivery</strong>
                                    <p className="">
                                        We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="55">
                                    <p className="text-left"><i className="ri-shield-check-line h1 text-primary"></i></p>
                                    <strong>CoinLynk Guarantee</strong>
                                    <p className="">
                                        We offer a secure and simple way to have your crypto delivered instantly to your wallet.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="60">
                                    <p className="text-left"><i className="las la-headset h1 text-primary"></i></p>
                                    <strong>World-class support</strong>
                                    <p className="">
                                        We have 24/7 live support via instant chat, e-mail and phone so you’re never alone.
                                        </p>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center mx-auto py-5 border-top" data-aos="zoom-in" data-aos-delay="160">
                                    <small className="text-success"><b>Why CoinLynk</b></small>
                                    <h2 className="font-weight-bold">Main copy that says <br /> what coinlynk is about</h2>
                                    <p>Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.</p>
                                    <Link to="" className="text-white btn btn-primary rounded-pill mx-2 h6 mt-3animated flipInX" style={{ animationDelay: '1s' }}>
                                        Buy bitcoin <i className="la la-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 text-center" data-aos="fade-right" data-aos-delay="50">
                                    <div className="my-2 card-header" style={{ background: 'rgb(232 234 196 / 28%) no-repeat' }} id="edge_bender_1">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Digital Assets</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="static/img/sec3/trade-data-assets.png" alt="trade-data-assets" className="img-fluid mt-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center" data-aos="fade-left" data-aos-delay="50">
                                    <div className="my-2" style={{ background: '#5470c717 no-repeat padding-box' }} id="edge_bender_2">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Giftcards</p>
                                            <span>Buy and sell gift cards on the CoinLynk app</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="static/img/sec3/trade-gift-card.png" alt="trade-gift-card" className="img-fluid mt-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center" data-aos="fade-right" data-aos-delay="50">
                                    <div className="my-2 card-header" style={{ background: 'rgb(0 196 255 / 12%) no-repeat padding-box' }} id="edge_bender_1">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">CoinLynk debit card</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="static/img/sec3/coinlink-debit-card.png" alt="coinlink-debit-card" className="img-fluid mt-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center" data-aos="fade-left" data-aos-delay="50">
                                    <div className="my-2 card-header" style={{ background: '#fbd8ff6e no-repeat padding-box' }} id="edge_bender_2">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Exchange currencies</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div>
                                            <img src="static/img/sec3/exchange-currency.png" alt="exchange-currency.png" className="img-fluid mt-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about my_font border">
                        <div className="container">
                            <div className="row py-5" data-aos="zoom-in" data-aos-delay="250">
                                <div className="col-12 text-left">
                                    <p className="h3"><b>Refill: Use Bitcoin For <br /> Your Daily Transactions</b></p>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="60">
                                    <div className="">
                                        <img src="static/img/refill/refill-1.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Airtime Purchase</b></p>
                                        <span>Buy airtime from MTN, Airtel, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-delay="160">
                                    <div className="">
                                        <img src="static/img/refill/refill-2.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Data Subscription</b></p>
                                        <span>Buy internet data from Swift, Airtel, Spectranet, MTN, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-delay="260">
                                    <div className="">
                                        <img src="static/img/refill/refill-3.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Airtime to Cash</b></p>
                                        <span>Bought excess airtime? Convert it to cash with us and get your value back.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about my_font">
                        <div className="container-fluid">
                            <div className="row bg-dark text-center">
                                <div className="col-lg-6 col-sm-12 mx-auto" data-aos="fade-up" data-aos-delay="100">
                                    <p className="py-2 mt-2 h1"><i class="ri-shield-line text-white"></i></p>
                                    <p><small className="text-success"><b>CoinLynk Guarantee</b></small></p>
                                    <p className="text-white h2">Our Guarantee</p>
                                    <p className="text-white">We will send within 5 minutes of approval <br /> or your next transaction is fee-free.</p>
                                    <p className="bg-white rounded-pill">All major credit and debit cards accepted
                                    <img src="" alt="" />
                                    </p>

                                    <div className="row mx-auto text-center py-3">
                                        <div className="col-6">
                                            <Link to="" className="btn btn-success border rounded-pill text-white"><span className="resizebtn">Get Started <i className="la la-angle-right"></i></span></Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="" className="btn btn-none border rounded-pill text-white"><span className="resizebtn">Buy Bitcoin <i className="la la-angle-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about my_font">
                        <div className="container-fluid">
                            <div className="row py-5" data-aos="zoom-in" data-aos-delay="50">
                                <div className="col-12 text-left">
                                    <p><small className="text-success"><b>Testimonials</b></small></p>
                                    <h2>What our customers <br /> are saying</h2>
                                </div>
                                <div class="row">
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
                                            <div className="col-sm-10 mx-auto">
                                                <div class="carousel-item active">
                                                    <div class="d-block mx-3">
                                                        <div class="slide-box row text-left">
                                                            <div className="col-md-4 py-3">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Excellent!</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>CoinLynk is my go-to vendor when it comes to purchasing bitcoin with a debit card.</small>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Sharon Ooja</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>Absolutely the best! I’ve been using this site for 2 years and would continue to in the future.</small>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Michael Jordan</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>CoinLynk is my go-to vendor when it comes to purchasing bitcoin with a debit card.</small>

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="carousel-item">
                                                    <div class="d-block mx-3">
                                                        <div class="slide-box row text-left">
                                                            <div className="col-md-4 py-3">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Sharon Ooja</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>Absolutely the best! I’ve been using this site for 2 years and would continue to in the future.</small>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Sharon Ooja</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>Absolutely the best! I’ve been using this site for 2 years and would continue to in the future.</small>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 py-3 d-none d-lg-block  d-md-block">
                                                                <div className="card p-3">
                                                                    <div className="py-2">
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                        <i className="la la-star text-warning"></i> &thinsp;
                                                                    </div>
                                                                    <b>Michael Jordan</b>
                                                                    <div className="h6 py-2" style={{ fontFamily: 'system-ui' }}>
                                                                        <small>CoinLynk is my go-to vendor when it comes to purchasing bitcoin with a debit card.</small>

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

                                <Helmet>
                                    <script src="static/js/homeSlider.js" type="text/javascript" />
                                </Helmet>
                            </div>
                        </div>
                    </section>





                    <section id="about" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container-fluid">
                            <div className="row" data-aos="fade-down" data-aos-delay="50">
                                <div className="col-md-10 col-sm-12  mx-auto text-center py-5" style={{ fontFamily: 'system-ui', background: '#011b33', borderRadius: "2em" }}>
                                    <img src="" alt="" />
                                    <p className="h2 text-white">Start buying bitcoin now</p>
                                    <Link to="" className="rounded-pill btn btn-white resizebtn">
                                        Get Started  <i className="la la-angle-right"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container-fluid border">
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <p className="text-left"><b>Subscribe to our newsletter</b></p>
                                    <form>
                                        <div class="input-group mb-3">
                                            <input type="email" class="form-control rounded-pill" placeholder="Your e-mail address" />
                                            <div class="input-group-append" style={{ position: "relative", left: '-55px', zIndex: 99 }}>
                                                <span class="input-group-text rounded-pill text-white" style={{ background: 'rgb(1, 27, 51)' }}>Subscribe <i className="la la-angle-right"></i></span>
                                            </div>
                                            <div className="row col-12 mt-5">
                                                <i class="lab la-twitter px-3 h4"></i>
                                                <i class="lab la-facebook-square px-3 h4"></i>
                                                <i class="lab la-instagram px-3 h4"></i>
                                                <i class="lab la-linkedin px-3 h4"></i>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                    <p className="text-left"><b>Product</b></p>
                                    <li>Currency Exchange</li>
                                    <li> Service Payments</li>
                                    <li> Bitcoin</li>
                                    <li> Wallet</li>
                                    <li> Giftcards</li>
                                </ul>

                                <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                    <p className="text-left"><b>Support</b></p>
                                    <li>Privacy Policy</li>
                                    <li> Terms of Use</li>
                                </ul>
                                <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                    <p className="text-left"><b>Legal</b></p>
                                    <li>About Us</li>
                                    <li> Contact </li>
                                    <li>FAQs</li>
                                </ul>
                                <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                    <p className="text-left"><b>Company</b></p>
                                    <li>Affiliate Program</li>
                                    <li>  Customer Reviews</li>
                                </ul>
                            </div>
                            <div className="col-10 mx-auto border-top  text-center">
                                <p className="py-5">
                                    <small>CoinLynk is a property of Lorem Technologies Limited,
                                    a company duly registered with CAC with RC Number: 1484208.
                                    Account numbers and Verve Cards are provided by Rubies Microfinance Bank
                                    , a company duly registered under the Laws of the Federal Republic of Nigeria;
                                    and duly licensed by the Central Bank of Nigeria, and pursuant to
                                       the rules of Verve International Limited.</small>
                                </p>
                                <small>
                                    CoinLynk 2020. All Rights Reserved.
                                </small>
                            </div>
                        </div>
                    </section>

                </main >
            </div >
        )
    }
}

export default Home;
