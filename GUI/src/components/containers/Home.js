import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Nav from "../base/Nav";
import Footer from "../base/Footer";


export class Home extends Component {
    render() {
        return (
            <div>
                <Nav />

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

                <main id="main">
                    <section id="" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-left" data-aos="fade-right" data-aos-delay="50">
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
                    <section id="section-1" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="50">
                                    <p className="text-left"><i className="ri-timer-flash-line h2 text-primary"></i></p>
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
                                <div className="col-md-6 col-lg-6 text-center mx-auto py-5 my-5" data-aos="zoom-in" data-aos-delay="160">
                                    <small className="text-success"><b>Why CoinLynk</b></small>
                                    <h2 className="font-weight-bold">Main copy that says <br /> what coinlynk is about</h2>
                                    <p>Buy bitcoin and other digital currencies with a debit or credit card from a leading cryptocurrency exchange platform simply, securely and without the wait.</p>
                                    <Link to="" className="text-white btn rounded-pill mx-2 h6 mt-3animated flipInX custom_btn_dark_blue" style={{ animationDelay: '1s' }}>
                                        Buy bitcoin <i className="la la-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section-2" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 text-center mb-4" data-aos="fade-right" data-aos-delay="50">
                                    <div className="py-5" id="prod_sec_1">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Digital Assets</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div className="m-5">
                                            <img src="static/img/sec3/trade-data-assets.png" style={{ width: "90%" }} alt="trade-data-assets" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center mb-4" data-aos="fade-left" data-aos-delay="50">
                                    <div className="py-5" id="prod_sec_2">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Trade Giftcards</p>
                                            <span>Buy and sell gift cards on the CoinLynk app</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div className="m-5">
                                            <img src="static/img/sec3/trade-gift-card.png" alt="trade-gift-card" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center mb-4" data-aos="fade-right" data-aos-delay="50">
                                    <div className="py-5" id="prod_sec_3">
                                        <div className="">
                                            <p className="h3 font-weight-bold text-dark">CoinLynk debit card</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div className="m-5">
                                            <img src="static/img/sec3/coinlink-debit-card.png" alt="coinlink-debit-card" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 text-center mb-4" data-aos="fade-left" data-aos-delay="50">
                                    <div className="py-5" id="prod_sec_4">
                                        <div>
                                            <p className="h3 font-weight-bold text-dark">Exchange currencies</p>
                                            <span>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</span>
                                            <br />
                                            <Link to=""> Learn more <i className="la la-angle-right"></i></Link>
                                        </div>
                                        <div className="m-5">
                                            <img src="static/img/sec3/exchange-currency.png" alt="exchange-currency.png" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="product" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container">
                            <div className="row py-5" data-aos="fade-up" data-aos-delay="150">
                                <div className="col-12 text-left">
                                    <p className="h3"><b>Refill: Use Bitcoin For <br /> Your Daily Transactions</b></p>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
                                    <div className="">
                                        <img src="static/img/refill/refill-1.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Airtime Purchase</b></p>
                                        <span>Buy airtime from MTN, Airtel, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
                                    <div className="">
                                        <img src="static/img/refill/refill-2.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Data Subscription</b></p>
                                        <span>Buy internet data from Swift, Airtel, Spectranet, MTN, Glo and 9mobile directly from your BTC wallet.</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
                                    <div className="">
                                        <img src="static/img/refill/refill-3.png" alt="refill-1" className="img-fluid rounded py-2" />
                                        <p className="h5"><b>Airtime to Cash</b></p>
                                        <span>Bought excess airtime? Convert it to cash with us and get your value back.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="section-4" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                        <div className="container-fluid">
                            <div className="row bg-dark text-center py-5">
                                <div className="col-lg-6 col-sm-12 mx-auto" data-aos="fade-up" data-aos-delay="100">
                                    <p className="py-2 mt-2 h1"><i className="ri-shield-line text-white"></i></p>
                                    <p><small className="text-success"><b>CoinLynk Guarantee</b></small></p>
                                    <p className="text-white h2">Our Guarantee</p>
                                    <p className="text-white">We will send within 5 minutes of approval <br /> or your next transaction is fee-free.</p>
                                    <p className="bg-white rounded-pill">All major credit and debit cards accepted
                                    <img src="" alt="" />
                                    </p>

                                    <div className="mx-auto text-center py-3">
                                        <Link to="" className="btn btn-success border rounded-pill text-white btn-sm"><span className="resizebtn">Get Started <i className="la la-angle-right"></i></span></Link>


                                        <Link to="" className="btn btn-none border rounded-pill text-white btn-sm"><span className="resizebtn">Buy Bitcoin <i className="la la-angle-right"></i></span></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section-5" className="about my_font">
                        <div className="container">
                            <div className="row py-5" data-aos="zoom-in" data-aos-delay="50">
                                <div className="col-12 text-left">
                                    <p><small className="text-success"><b>Testimonials</b></small></p>
                                    <h2>What our customers <br /> are saying</h2>
                                </div>
                                <div className="row">
                                    <div id="carousel" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#carousel" data-slide-to="1"></li>
                                        </ol>

                                        <div className="carousel-inner">
                                            <div>
                                                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                    <span className="la la-angle-left rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                    <span className="la la-angle-right rounded-circle bg-white card p-2 shadow text-dark font-weight-bold h4 border"></span>
                                                </a>
                                            </div>
                                            <div className="col-sm-12 mx-auto">
                                                <div className="carousel-item active">
                                                    <div className="d-block mx-3">
                                                        <div className="slide-box row text-left">
                                                            <div className="col-md-4 py-3">
                                                                <div className="border rounded p-3" id="slide_sizer">
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
                                                                <div className="border rounded p-3" id="slide_sizer">
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
                                                                <div className="border rounded p-3" id="slide_sizer">
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

                                                <div className="carousel-item">
                                                    <div className="d-block mx-3">
                                                        <div className="slide-box row text-left">
                                                            <div className="col-md-4 py-3">
                                                                <div className="border rounded p-3" id="slide_sizer">
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
                                                                <div className="border rounded p-3" id="slide_sizer">
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
                                                                <div className="border rounded p-3" id="slide_sizer">
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


                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </div >
        )
    }
}

export default Home;
