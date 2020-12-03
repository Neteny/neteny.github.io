import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideBar from "../base/SideBar";
export class BuyBitcoin extends Component {
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
                                        <div className="col-md-6 pb-4">
                                            <div className="border" style={{ borderRadius: "1em", paddingTop: "12px" }}>
                                                <ul className="nav nav-tabs row" role="tablist">
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-left active text-muted" data-toggle="tab" href="#panel555" role="tab" style={{ paddingRight: "11px" }}>
                                                            Buy</a>
                                                    </li>
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-right text-muted" data-toggle="tab" href="#panel666" role="tab" style={{ paddingRight: "71px" }}>
                                                            Sell
                                                    </a>
                                                    </li>
                                                </ul>


                                                <div className="tab-content">

                                                    <div className="tab-pane fade in show active off_show" id="panel555" role="tabpanel">
                                                        <p className="py-2 text-center">
                                                            <span className="text-muted p-2 alert-success text-success rounded-pill" style={{ fontSize: "10px" }}>
                                                                <small className="text-success">EXCHANGE RATE:497.38/$</small>
                                                            </span>
                                                        </p>
                                                        <div>
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>BUY BITCOIN FROM</sup>
                                                            <div className="form-group">
                                                                <div className="border px-3 rounded-lg">
                                                                    <div className="mt-4 mb-0">
                                                                        <label htmlFor="air_select">
                                                                            <span className="rounded-circle bg-success text-white p-2">N</span>
                                                                    &ensp;
                                                                    <span className="font-weight-bold">Naira Wallet</span>
                                                                        </label>
                                                                    </div>
                                                                    <select
                                                                        id="air_select"
                                                                        className="col-12"
                                                                        searchable="Search here.."
                                                                        defaultValue={"Naira Wallet"}>
                                                                        <option></option>
                                                                        <option>naira</option>
                                                                        <option>kobo</option>
                                                                        <option>satochi</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>DEPOSIT BITCOIN TO</sup>
                                                            <div className="form-group">
                                                                <div className="border px-3 rounded-lg">
                                                                    <div className="mt-4 mb-0">
                                                                        <label htmlFor="air_select">
                                                                            <span className="rounded-circle bg-warning text-white p-2">B</span>
                                                                    &ensp;
                                                                    <span className="font-weight-bold">BTC Wallet</span>
                                                                        </label>
                                                                    </div>
                                                                    <select
                                                                        id="air_select"
                                                                        className="col-12"
                                                                        searchable="Search here.."
                                                                        defaultValue={"Naira Wallet"}>
                                                                        <option></option>
                                                                        <option>100NGN</option>
                                                                        <option>1000NGN</option>
                                                                        <option>10NGN</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>

                                                            <div className="row">
                                                                <sup className="text-muted py-2 col-12 text-left" style={{ fontSize: "10px" }}>INPUT PHONE NUMBER</sup>

                                                                <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control form-control-lg" placeholder="# 0.00" />
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mx-sm-auto">
                                                                    <i className="las la-exchange-alt h1 text-success"></i>
                                                                </div>

                                                                <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control form-control-lg" placeholder="$ 0.00" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="row">

                                                                <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <i className="las la-exchange-alt h1 text-success" style={{ transform: "rotate(90deg)" }}></i>
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mx-sm-auto">
                                                                    {/* <i className="las la-exchange-alt h1 text-success"></i> */}
                                                                </div>

                                                                <div className="col-md-5">
                                                                    <div className="form-group float-right">
                                                                        <i className="las la-exchange-alt h1 text-success" style={{ transform: "rotate(90deg)" }}></i>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control form-control-lg" placeholder="0.00 BTC" />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="pt-3">
                                                            <button className="btn btn-success btn-block">buy</button>
                                                        </div>
                                                    </div>



                                                    <div className="tab-pane fade" id="panel666" role="tabpanel" style={{ backgroundColor: 'white' }}>

                                                        <div>
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>SELECT WALLET</sup>
                                                            <div className="form-group">
                                                                <div className="border px-3 rounded-lg">
                                                                    <div className="mt-4 mb-0">
                                                                        <label htmlFor="air_select">
                                                                            <span className="rounded-circle bg-success text-white p-2">N</span>
                                                                    &ensp;
                                                                    <span className="font-weight-bold">Naira Wallet</span>
                                                                        </label>
                                                                    </div>
                                                                    <select
                                                                        id="air_select"
                                                                        className="col-12"
                                                                        searchable="Search here.."
                                                                        defaultValue={"Naira Wallet"}>
                                                                        <option></option>
                                                                        <option>naira</option>
                                                                        <option>kobo</option>
                                                                        <option>satochi</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>SELECT NETWORK</sup>
                                                            <div className="form-group">
                                                                <div className="border px-3 rounded-lg">
                                                                    <div className="mt-4 mb-0">
                                                                        <label htmlFor="air_select">
                                                                            <img src="static/img/smile.jpg" alt="" className="img-fluid" />
                                                                    &ensp;
                                                                    <span className="font-weight-bold">Smile</span>
                                                                        </label>
                                                                    </div>
                                                                    <select
                                                                        id="air_select"
                                                                        className="col-12"
                                                                        searchable="Search here.."
                                                                        defaultValue={"Naira Wallet"}>
                                                                        <option></option>
                                                                        <option>100NGN</option>
                                                                        <option>1000NGN</option>
                                                                        <option>10NGN</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>INPUT PHONE NUMBER</sup>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control form-control-lg" />
                                                            </div>
                                                            <div className="">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                <label className="form-check-label" htmlFor="exampleCheck1">Save Beneficiary</label>
                                                            </div>
                                                        </div>
                                                        <div className="pt-3">
                                                            <sup className="text-muted " style={{ fontSize: "10px" }}>SELECT DATA AMOUNT</sup>
                                                            <div className="form-group">
                                                                <div className="border px-3 rounded-lg">
                                                                    <div className="mt-4 mb-0">
                                                                        <label htmlFor="air_select">
                                                                            <span className="font-weight-bold">
                                                                                2gb weekly @ NGN 2,000
                                                                    </span>
                                                                        </label>
                                                                    </div>
                                                                    <select
                                                                        id="air_select"
                                                                        className="col-12"
                                                                        searchable="Search here.."
                                                                        defaultValue={"Naira Wallet"}>
                                                                        <option></option>
                                                                        <option>100NGN</option>
                                                                        <option>1000NGN</option>
                                                                        <option>10NGN</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-3">
                                                            <button className="btn btn-success btn-block">Continue</button>
                                                        </div>



                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-center mx-auto border airtime_sec_2" style={{ height: "42.5em" }}>
                                            <p className="font-weight-bold text-left pt-2 pb-3">Transaction details</p>
                                            <div className="card-header rounded-lg">
                                                <div className="p-3 row">
                                                    <div className="col-6">
                                                        <span className="float-left font-weight-bold">You are buying</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="float-right font-weight-bold">Cable TV Sub</span>
                                                    </div>
                                                </div>
                                                <div className="p-3 row border-top">
                                                    <div className="col-6">
                                                        <span className="float-left font-weight-bold">You pay</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="float-right font-weight-bold">NGN 0.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="">
                                                <ol style={{ listStyle: "none" }}>
                                                    <li className="row">
                                                        <div className="text-left float-left col-2">
                                                            <i className="las la-wallet sav_top_1 h2"></i>
                                                        </div>
                                                        <div className="border-bottom col-10 text-left pl-4">
                                                            <p className="text-muted text-left" style={{ fontSize: "10px" }}>PAYMENT METHOD</p>
                                                            <p className="font-weight-bold">Naira Wallet</p>
                                                        </div>
                                                    </li>
                                                    <svg viewBox="0 0 100% 50%" version="1.1" className="sav_1">
                                                        <line x1="18" y1="20" x2="18" y2="78.875" stroke="#0bb0e7" strokewidt="1" strokeDasharray="5,5" d="M5 20 l215 0"
                                                        >
                                                        </line>
                                                    </svg>
                                                    <li className="row sav_li_2">
                                                        <div className="text-left float-left col-2">
                                                            <i className="las la-bolt sav_top_1 h2"></i>
                                                        </div>
                                                        <div className="border-bottom col-10 text-left pl-4">
                                                            <p className="text-muted text-left" style={{ fontSize: "10px" }}>AVAILABLE</p>
                                                            <p className="font-weight-bold">Instantly</p>
                                                        </div>
                                                    </li>
                                                    <svg viewBox="0 0 100% 50%" version="1.1" className="sav_2">
                                                        <line x1="18" y1="20" x2="18" y2="78.875" stroke="#0bb0e7" strokewidt="1" strokeDasharray="5,5" d="M5 20 l215 0"
                                                        >
                                                        </line>
                                                    </svg>
                                                    <li className="row sav_li_3">
                                                        <div className="text-left float-left col-2">
                                                            <i className="las la-bolt sav_top_1 h2"></i>
                                                        </div>
                                                        <div className="border-bottom col-10 text-left pl-4">
                                                            <p className="text-muted text-left" style={{ fontSize: "10px" }}>AVAILABLE</p>
                                                            <p className="font-weight-bold">Instantly</p>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <div className="border-top sav_li_4 rounded-lg">
                                                    <p className="text-muted text-left pt-3" style={{ fontSize: "10px" }}>TOTAL</p>
                                                    <div className="">
                                                        <span className="float-left">Total Payout</span>
                                                        <span className="float-right">NGN 0.00</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <ol className="col-md-12 border mx-auto faq-list number-circle-list number-circle-list--tertiary-color" id="color_bullet" style={{ listStyle: "none" }}>

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

export default BuyBitcoin;
