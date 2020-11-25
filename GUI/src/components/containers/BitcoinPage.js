import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";
import Footer from "../base/Footer";
import { Helmet } from "react-helmet";

export class BitcoinPage extends Component {
    render() {
        return (
            <div>
                <Nav />

                <section id="control" className="bitcoin_page_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-5 pt-5">
                                <div data-aos="zoom-out" id="text_sm_center">
                                    <p className="display-4 font-weight-bold text-white">  Trading at the <br /> best rates with  <br /> no hassle</p>
                                    <p className="text-white">Patricia makes it easy to buy, sell or store cryptocurrency. </p>
                                    <div className="text-center text-lg-left">
                                        <Link to="" className="btn text-white btn-sm" id="custom_btn_dark">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/bitcoin-asset.png" className="img-fluid animated bitcoin_page_img" alt="" />
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
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#b57afcc4" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#00e6f8c4" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#ffffffbd" />
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
                            </div>
                        </div>
                    </section>

                    <section id="section-2" className="about my_font pt-5" style={{ fontFamily: 'system-ui' }}>
                        <div className="container">
                            <div>
                                <p className="h1 text-center py-2">How It Works</p>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="50">
                                    <div className="row mx-auto">
                                        <div className="col-md-8 col-sm-12">
                                            <img src="static/img/bitcoin_sub_1.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-4 my-5  d-none d-md-block d-lg-block">
                                            <i className="la la-angle-right border rounded-circle bg-white p-1"></i>
                                        </div>
                                    </div>
                                    <strong className="pt-2">Sign up and get verified</strong>
                                    <p className="">
                                        Just sign up, upload your ID doc, and open your account today, it’s super quick.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="55">
                                    <div className="row mx-auto">
                                        <div className="col-md-8 col-sm-12">
                                            <img src="static/img/bitcoin_sub_2.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-4 my-5  d-none d-md-block d-lg-block">
                                            <i className="la la-angle-right border rounded-circle bg-white p-1"></i>
                                        </div>
                                    </div>
                                    <strong className="pt-2">Buy tokens</strong>
                                    <p className="">
                                        Select which tokens you’ll like to buy. We currently sell BTC, LTC, ETH and giftcards.
                                        </p>
                                </div>
                                <div className="col-md-4 col-lg-4 text-justify" data-aos="fade-left" data-aos-delay="60">
                                    <div className="row mx-auto">
                                        <div className="col-md-8 col-sm-12">
                                            <img src="static/img/bitcoin_sub_3.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-4 my-5  d-none d-md-block d-lg-block">

                                        </div>
                                    </div>
                                    <strong className="pt-2">Receive tokens</strong>
                                    <p className="">
                                        We will send the purchased tokens to your wallet within 15 minutes of approval.
                                        </p>
                                </div>
                                <div className="text-center col-12 mx-auto pb-3">
                                    <Link to="" className="btn-secondary text-white btn-sm" id="custom_btn_dark">Get Started
                                     <i className="la la-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center mx-auto" data-aos="fade-right" data-aos-delay="50">
                                    <h3 className="">
                                        <b> Bitcoin Price Chart</b>
                                    </h3>
                                    <small>Bitcoin rates may fluctuate but our services never will.</small>
                                </div>
                                <div className="col-12">
                                    <div className="">
                                        <small className="text-muted text-left pb-2"><b>Current BTC Rates</b></small>
                                        <small className="text-muted  px-2 float-right"><b>One Month</b></small>
                                        <small className="text-muted  px-2 float-right"><b className="text-primary">One Week</b></small>
                                        <small className="text-muted  px-2 float-right"><b>24 Hours</b></small>
                                        <small className="text-muted  px-2 float-right"><b>1 Hour</b></small>
                                    </div>
                                    <div id="chartContainer" style={{ height: '300px', maxWidth: '920px', margin: '0px auto' }}></div>
                                    <Helmet>
                                        <script src="static/js/graph.js" type="text/javascript" />
                                        <script src="static/js/canvasjs.min.js"></script>
                                        <script>
                                            document.getElementsByClassName('canvasjs-chart-credit')[0].innerHTML = "heey";
                                        </script>
                                    </Helmet>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="" className="about my_font">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto text-left" data-aos="fade-right" data-aos-delay="50">
                                    <h6 className="buy_bit">
                                        <b>Simple Bitcoin Converter</b>
                                    </h6>
                                    <small className="text-muted">
                                        FROM BITCOIN TO NAIRA
                                    </small>
                                </div>
                                <div className="col-md-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control py-4" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">BTC</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <i className="las la-sync h1 text-primary"></i>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control py-4" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <select className="input-group-text" id="basic-addon2" style={{ outline: "none" }}>
                                                        <option value="1">NGN</option>
                                                        <option value="2">USD</option>
                                                        <option value="3">GHA</option>
                                                        <option value="4">SSD</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
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
                    <section>
                        <div className="container" style={{ fontFamily: "system-ui" }}>
                            <div className="row" data-aos="zoom-in" data-aos-delay="160">
                                <div className="col-lg-6 col-md-6 mx-auto">
                                    <img src="static/img/home-moble-photo.png" alt="" className="img-fluid cal_img_1" />
                                </div>
                                <div className="col-lg-6 col-md-6 text-left">
                                    <div className="pb-3">
                                        <h2 className="font-weight-bold">How To Buy Giftcards</h2>
                                        <small className="pt-3">You can buy a Giftcard in few simple steps.</small>
                                    </div>
                                    <ol className="round_ol text-left pt-2">
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Signup</strong> <br />
                                                    <small>Input a valid email address and choose a strong password. Make sure no one is looking.</small>
                                                </p>
                                            </div>

                                        </li>

                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Onboarding</strong> <br />
                                                    <small>Check the email you provided for a magic link that completes your verification. Now, you’re in.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Choose Trade Operation</strong> <br />
                                                    <small>From your dashboard, select Giftcard and click buy.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Select Giftcard</strong> <br />
                                                    <small>Scroll down and click the buy button.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Select Buy</strong> <br />
                                                    <small>Scroll down and click the buy button.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Card Received</strong> <br />
                                                    <small>Your Giftcard redeem code will be sent to your verified email address after your transaction is confirmed.</small>
                                                </p>
                                            </div>

                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row" data-aos="zoom-in" data-aos-delay="160">
                                <div className="col-lg-6 col-md-6 order-lg-12 order-md-12 mx-auto">
                                    <img src="static/img/home-moble-photo.png" alt="" className="img-fluid cal_img_2" />
                                </div>

                                <div className="col-lg-6 col-md-6 text-left">
                                    <div className="pb-3">
                                        <h2 className="font-weight-bold">How To Sell Giftcards</h2>
                                        <small className="pt-3">You can sell a Giftcard for cash in few simple steps.</small>
                                    </div>
                                    <ol className="round_ol text-left pt-2">
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Signup</strong> <br />
                                                    <small>Input a valid email address and choose a strong password. Make sure no one is looking.</small>
                                                </p>
                                            </div>

                                        </li>

                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Onboarding</strong> <br />
                                                    <small>Check the email you provided for a magic link that completes your verification. Now, you’re in.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Choose Trade Operation</strong> <br />
                                                    <small>From your dashboard, select Giftcard and click buy.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Select Giftcard</strong> <br />
                                                    <small>Scroll down and click the buy button.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Select Buy</strong> <br />
                                                    <small>Scroll down and click the buy button.</small>
                                                </p>
                                            </div>

                                        </li>
                                        <li className="col-12">
                                            <div className="d-block ml-3 border-top">
                                                <p className=""><strong>Upload Card</strong> <br />
                                                    <small>Upload a CLEAR picture of the card and check your mail for a confirmation notification and the equivalent funds in your Patricia wallet.</small>
                                                </p>
                                            </div>

                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-12 mx-auto text-center pb-5">
                                <p className="h1">Frequently Asked Questions</p>
                            </div>
                            <ol className="col-md-10 mx-auto faq-list number-circle-list number-circle-list--tertiary-color" id="color_bullet" style={{ listStyle: "none" }}>

                                <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                    <a data-toggle="collapse" href="#faq1">
                                        <span className="text-left text-dark h5">What are BTC transfer fees</span>
                                        <i className="text-right float-right la la-plus font-weight-bold text-dark h5"></i>
                                    </a>

                                    <ul id="faq1" className="collapse off_show text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                        <p className="font-weight-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in laborum quam repellendus nobis consectetur porro id amet aliquid! Veritatis error soluta sint, assumenda tempore aspernatur laudantium non animi hic?

                                    </p>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                    </ul>
                                </li>

                                <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                    <a data-toggle="collapse" href="#faq2">
                                        <span className="text-left text-dark h5">BTC Transaction ID</span>
                                        <i className="text-right float-right la la-plus font-weight-bold text-dark h5"></i>
                                    </a>

                                    <ul id="faq2" className="collapse off_show" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                        <p className="font-weight-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in laborum quam repellendus nobis consectetur porro id amet aliquid! Veritatis error soluta sint, assumenda tempore aspernatur laudantium non animi hic?

                                    </p>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                    </ul>
                                </li>
                                <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                    <a data-toggle="collapse" href="#faq3">
                                        <span className="text-left text-dark h5">Reasons for delayed BTC confirmation</span>
                                        <i className="text-right float-right la la-plus font-weight-bold text-dark h5"></i>
                                    </a>

                                    <ul id="faq3" className="collapse off_show" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                        <p className="font-weight-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in laborum quam repellendus nobis consectetur porro id amet aliquid! Veritatis error soluta sint, assumenda tempore aspernatur laudantium non animi hic?

                                    </p>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                    </ul>
                                </li>

                                <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                    <a data-toggle="collapse" href="#faq4">
                                        <span className="text-left text-dark h5">How to get your BTC hash ID</span>
                                        <i className="text-right float-right la la-plus font-weight-bold text-dark h5"></i>
                                    </a>

                                    <ul id="faq4" className="collapse off_show text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                        <p className="font-weight-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in laborum quam repellendus nobis consectetur porro id amet aliquid! Veritatis error soluta sint, assumenda tempore aspernatur laudantium non animi hic?

                                    </p>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                    </ul>
                                </li>

                                <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                    <a data-toggle="collapse" href="#faq5">
                                        <span className="text-left text-dark h5">What does USD value in BTC mean</span>
                                        <i className="text-right float-right la la-plus font-weight-bold text-dark h5"></i>
                                    </a>

                                    <ul id="faq5" className="collapse off_show text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                        <p className="font-weight-bold">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in laborum quam repellendus nobis consectetur porro id amet aliquid! Veritatis error soluta sint, assumenda tempore aspernatur laudantium non animi hic?

                                    </p>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                        <li className="color_bullet_li">
                                            orem ipsum dolor sit amet consectetur
                                    </li>
                                    </ul>
                                </li>

                            </ol>
                        </div>
                    </section>


                </main >

                <Footer />
            </div >
        )
    }
}

export default BitcoinPage
