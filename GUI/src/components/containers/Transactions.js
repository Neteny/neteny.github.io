import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar";


export class Transactions extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main class="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9">
                                    <div class="tab border-top border-bottom row text-center">
                                        <div className="col-md-3 mx-auto">
                                            <button class="tablinks active" onClick={(event) => openCity(event, 'All')}>All</button>
                                        </div>
                                        <div className="col-md-3 mx-auto">
                                            <button class="tablinks" onClick={(event) => openCity(event, 'Withdrawals')}>Withdrawals</button>
                                        </div>
                                        <div className="col-md-3 mx-auto">
                                            <button class="tablinks" onClick={(event) => openCity(event, 'Debit')}>Debit</button>
                                        </div>
                                        <div className="col-md-3 mx-auto">
                                            <button class="tablinks" onClick={(event) => openCity(event, 'Credit')}>Credit</button>
                                        </div>
                                    </div>

                                    <div id="All" class="tabcontent" style={{ display: "block" }}>
                                        <p className="text-left pt-5"> <sup className="text-muted" style={{ fontSize: "10px" }}>TODAY</sup></p>


                                        <div className="row">
                                            <div className="col-12">
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



                                        <div className="row">
                                            <p className="text-left pt-4 col-12"> <sup className="text-muted" style={{ fontSize: "10px" }}>YESTERDAY</sup></p>
                                            <div className="col-12">
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
                                            <div className="col-12 pt-4 border-top">
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
                                        </div>
                                    </div>

                                    <div id="Withdrawals" class="tabcontent">
                                        <h3>Paris</h3>
                                        <p>Paris is the capital of France.</p>
                                    </div>

                                    <div id="Debit" class="tabcontent">
                                        <h3>Tokyo</h3>
                                        <p>Tokyo is the capital of Japan.</p>
                                    </div>
                                    <div id="Credit" class="tabcontent">
                                        <h3>Tokyo</h3>
                                        <p>Tokyo is the capital of Japan.</p>
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

export default Transactions;
