import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar"

export class Home extends Component {
    render() {
        return (
            <div>

                <div className="page-wrapper chiller-theme toggled">

                    <SideBar />

                    <main class="page-content border">

                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9">
                                    <div id="carousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="text-right">
                                                <a className="" href="#carousel" role="button" data-slide="prev">
                                                    <span className="la la-angle-left text-dark font-weight-bold h4"></span>
                                                </a>
                                                <a href="#carousel" role="button" data-slide="next">
                                                    <span className="la la-angle-right text-dark font-weight-bold h4"></span>
                                                </a>
                                            </div>
                                            <p className="text-muted text-left"><sub>BALANCES</sub></p>
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
                                    <p className="text-muted text-left"><sub>QUICK ACTIONS</sub></p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/trading-on-coinbase.png" style={{ height: "40px" }} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Exchange currencies</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/financials.png" alt="" style={{ height: "40px" }} className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Trade giftcards</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/privacy-security.png" style={{ height: "40px" }} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Trade crypto-currencies</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/managing-account.png" alt="" style={{ height: "40px" }} className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Airtime to Cash</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/getting-started.png" style={{ height: "40px" }} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Buy Airtime and Data</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row shadow border border-white p-1 rounded-lg my-3">
                                                <div className="col-3">
                                                    <img src="static/img/variety/other-topics.png" alt="" style={{ height: "40px" }} className="img-fluid" />
                                                </div>
                                                <div className="col-6 pt-1">
                                                    <p className="">Pay Bills</p>
                                                </div>
                                                <div className="col-3 pt-1">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4 col-12 text-muted text-left"><sub className="float-left">RECENT TRANSACTIONS</sub>
                                            <Link className="float-right"><sub>View all transactions <i className="la la-angle-right"></i></sub> </Link>
                                        </div>
                                    </div>

                                    <div className="row border">
                                        <div className="col-12 pt-4 border-bottom">
                                            <div className="row">
                                                <div className="col-8 float-left">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <p className="recent_trans_1 text-warning">B</p>
                                                        </div>
                                                        <div className="col-6">
                                                            Bitcoin transfer
                                                            <br />
                                                            <sup>March 30, 2020</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 float-right">
                                                    <p>- 0.008765 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-4 border-bottom">
                                            <div className="row">
                                                <div className="col-8 float-left">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <p className="recent_trans_2 text-success">N</p>
                                                        </div>
                                                        <div className="col-6">
                                                            Naira Wallet Top Up
                                                            <br />
                                                            <sup>March 30, 2020</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 float-right">
                                                    <p>- 0.008765 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-4 border-bottom">
                                            <div className="row">
                                                <div className="col-8 float-left">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <p className="recent_trans_3 text-danger">$</p>
                                                        </div>
                                                        <div className="col-6">
                                                            Dollar to Naira exchange
                                                            <br />
                                                            <sup>March 30, 2020</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 float-right">
                                                    <p>- 0.008765 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-4 border-bottom">
                                            <div className="row">
                                                <div className="col-8 float-left">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <p className="recent_trans_4">E</p>
                                                        </div>
                                                        <div className="col-6">
                                                            Received Euros
                                                            <br />
                                                            <sup>March 30, 2020</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 float-right">
                                                    <p>- 0.008765 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-4 border-bottom">
                                            <div className="row">
                                                <div className="col-8 float-left">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <p className="recent_trans_5">Y</p>
                                                        </div>
                                                        <div className="col-6">
                                                            Yen to Dollar exchange
                                                            <br />
                                                            <sup>March 30, 2020</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 float-right">
                                                    <p>- 0.008765 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-3 card-header text-center">
                                    <div className="row">
                                        <div className="col-md-12 home_sidebar_main_1">
                                            <sup className="text-muted " style={{ fontSize: "8px" }}>EXCHANGE</sup>
                                            <div className="row border-bottom" id="home_sidebar_sub_1">
                                                <div className="col-3 img_sec text-center mx-auto">
                                                    <img src="static/img/avater.png" alt="" />
                                                </div>
                                                <div className=" col-6 float-center mx-auto text-center pt-2 pb-4">
                                                    <b>Exchange Currencies</b>
                                                </div>
                                                <div className="col-2 float-right">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 home_sidebar_main_2">
                                            <sup className="text-muted " style={{ fontSize: "8px" }}>EXCHANGE</sup>
                                            <div className="row border-bottom" id="home_sidebar_sub_1">
                                                <div className="col-3 img_sec text-center mx-auto">
                                                    <img src="static/img/avater.png" alt="" />
                                                </div>
                                                <div className=" col-6 float-center mx-auto text-center pt-2 pb-4">
                                                    <b>Exchange Currencies</b>
                                                </div>
                                                <div className="col-2 float-right">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 home_sidebar_main_3">
                                            <sup className="text-muted " style={{ fontSize: "8px" }}>EXCHANGE</sup>
                                            <div className="row border-bottom" id="home_sidebar_sub_1">
                                                <div className="col-3 img_sec text-center mx-auto">
                                                    <img src="static/img/avater.png" alt="" />
                                                </div>
                                                <div className=" col-6 float-center mx-auto text-center pt-2 pb-4">
                                                    <b>Exchange Currencies</b>
                                                </div>
                                                <div className="col-2 float-right">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 home_sidebar_main_4">
                                            <sup className="text-muted " style={{ fontSize: "8px" }}>EXCHANGE</sup>
                                            <div className="row border-bottom" id="home_sidebar_sub_1">
                                                <div className="col-3 img_sec text-center mx-auto">
                                                    <img src="static/img/avater.png" alt="" />
                                                </div>
                                                <div className=" col-6 float-center mx-auto text-center pt-2 pb-4">
                                                    <b>Exchange Currencies</b>
                                                </div>
                                                <div className="col-2 float-right">
                                                    <i className="la la-angle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-5">
                                        <div className="col-md-12 home_sidebar_main_5">
                                            <p style={{ height: "20em", paddingTop: "9.5em" }}>
                                                <Link to="" className="text-white btn-white btn-sm rounded-pill text-success" id="">
                                                    Get Started <i className="la la-angle-right"></i>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        )
    }
}

export default Home;
