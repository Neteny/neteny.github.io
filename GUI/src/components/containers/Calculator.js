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
                                                                    <img src="static/img/apple-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/dominos.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/gift-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/home-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <div className="d-block mx-3">
                                                            <div className="slide-box row text-left">
                                                                <div className="col-md-3 py-3">
                                                                    <img src="static/img/uber-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/other-card.png" alt="" className="img-fluid" />
                                                                </div>

                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/apple-card.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="col-md-3 py-3 d-none d-lg-block  d-md-block">
                                                                    <img src="static/img/dominos.png" alt="" className="img-fluid" />
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
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#dd4d74b0" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#c2c6fce0" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#f9ccb2d1" />
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
                    <div className="container">
                        <div className="row" data-aos="zoom-in" data-aos-delay="160">
                            <div className="col-md-10 mx-auto text-center border py-4" id="cal_sec">
                                <div className="row">
                                    <div className="col-md-6">

                                        <ul className="nav nav-tabs nav-justified p-2 my-1 border digital_asset" role="tablist">
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
                                            <div className="tab-pane fade in show active off_show" id="panel555" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="form-group">
                                                                <select
                                                                    className="col-12 digital_asset_1"
                                                                    searchable="Search here.."
                                                                    defaultValue={"Digital Assets"}>
                                                                    <option disabled>Digital Assets</option>
                                                                    <option>Assets 1</option>
                                                                    <option>Assets 2</option>
                                                                    <option>Assets 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <select
                                                                    className="col-12 digital_asset_1"
                                                                    searchable="Search here.."
                                                                    defaultValue={"Select Country"}>
                                                                    <option disabled>Select Country</option>
                                                                    <option>Nigeria</option>
                                                                    <option>Finland</option>
                                                                    <option>Swiden</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <select
                                                                    className="col-12 digital_asset_1"
                                                                    searchable="Search here.."
                                                                    defaultValue={"Card Type"}>
                                                                    <option disabled>Card Type</option>
                                                                    <option>master cards</option>
                                                                    <option>Verve</option>
                                                                    <option>Others</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <div contentEditable="true" className="col-12 digital_asset_1 text-left" id="text_area">
                                                                    <small className="text-muted">AMOUNT</small>
                                                                    <p className="h1 text-muted">0.00</p>
                                                                </div>
                                                            </div>
                                                            <div className="mx-auto text-center">
                                                                <button className="cal_btn text-white btn-block">Calculate</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="tab-pane fade" id="panel666" role="tabpanel" style={{ backgroundColor: 'white' }}>
                                                <p className="">Buy Section</p>

                                            </div>


                                        </div>

                                    </div>
                                    <div className="col-md-6 text-center mx-auto">
                                        <div id="pad_cal_result">
                                            <p className="font-weight-bold text-dark h5 text-center">Total Payout</p>
                                            <p className="text-dark display-3">NGN 0.00</p>
                                            <p className="font-weight-bold text-muted">Rate: NGN 0.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container" style={{ fontFamily: "system-ui" }}>
                        <div className="row" data-aos="fade-up" data-aos-delay="160">
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
                        <div className="row" data-aos="fade-up" data-aos-delay="160">
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
                    <div className="row" data-aos="fade-up" data-aos-delay="160">
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
                <Footer />
            </div >
        )
    }
}

export default Calculator;
