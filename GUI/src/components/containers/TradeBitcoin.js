import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideBar from "../base/SideBar";

export class TradeBitcoin extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main className="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="border pb-3" style={{ borderRadius: "1em" }}>
                                                <div className="row mx-lg-1">
                                                    <div className="col-md-6 text-left p-3">
                                                        <span className="rounded-circle bg-warning text-white p-2">B</span>
                                                            &ensp;
                                                        <span className="font-weight-bold">Naira Wallet</span>
                                                    </div>

                                                    <div className="col-6 text-right p-3">
                                                        <span className="p-2 text-success font-weight-bold">+ 5.2703%</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-left py-3">
                                                    <p className="h4">0.0000 BTC</p>
                                                    <sup className="text-muted " style={{ fontSize: "10px" }}>1 BTC = NGN 3,999,876</sup>
                                                </div>
                                                <div className="col-10 mx-auto border border-success rounded-pill">
                                                    <div className="row text-success">
                                                        <div className="col-6 border-right border-success">SEND</div>

                                                        <div className="col-6 text-right">RECEIVE</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="border py-3" style={{ borderRadius: "1em" }}>
                                                <div className="row mx-lg-1">
                                                    <div className="col-12 text-left p-3">
                                                        <span className="font-weight-bold px-1">Receive bitcoin with QR codes</span> <br />
                                                        <sup className="text-muted px-1" style={{ fontSize: "10px" }}>Never miss a digit in your bitcoin address again</sup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5 mx-auto">
                                                        <img src="static/img/barcode.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <i class="las la-download border border-secondary rounded-circle p-2"></i>
                                                                <p>Save</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <i class="las la-share border border-secondary rounded-circle p-2"></i>
                                                                <p>Share</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="text-left pt-5 col-12">
                                            <sup className="text-muted" style={{ fontSize: "10px" }}>RECENT TRANSACTIONS</sup>
                                            <sup className="text-primary float-right" style={{ fontSize: "10px" }}>View all transactions</sup>
                                        </p>

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
                                </div>
                                <div className="col-md-3 border">
                                    <ol className="col-md-12 mx-auto faq-list number-circle-list number-circle-list--tertiary-color" id="color_bullet" style={{ listStyle: "none" }}>

                                        <li className="number-circle-list--list-item warn_li py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq1">
                                                <span className="text-left text-dark h6">How to Exchange</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq1" className="collapse off_show col-12 text-justify show" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                            </div>
                                        </li>

                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq2">
                                                <span className="text-left text-dark h6">How to Sell</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq2" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                            </div>
                                        </li>
                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq3">
                                                <span className="text-left text-dark h6">How to Receive</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq3" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                            </div>
                                        </li>

                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq4">
                                                <span className="text-left text-dark h6">How to Send</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq4" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                         </div>
                                        </li>

                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq4">
                                                <span className="text-left text-dark h6">What are the fees?</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq4" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                         </div>
                                        </li>
                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq4">
                                                <span className="text-left text-dark h6">Delayed incoming BTC</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq4" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                         </div>
                                        </li>
                                        <li className="number-circle-list--list-item warn_li border-top py-3" data-aos="fade-up" data-aos-delay="100">
                                            <a data-toggle="collapse" href="#faq4">
                                                <span className="text-left text-dark h6">Universal Wallet</span>
                                                <i className="text-right float-right la la-angle-down font-weight-bold text-dark h6"></i>
                                            </a>

                                            <div id="faq4" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
                                         </div>
                                        </li>
                                    </ol>


                                </div>
                            </div>
                        </div>

                    </main>
                </div>
                <Helmet>
                    <script src="static/js/sidebar.js" type="text/javascript" />
                </Helmet>
            </div >
        )
    }
}

export default TradeBitcoin;
