import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar";
import { Helmet } from "react-helmet";

export class InternetSub extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main className="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-10">
                                    <div className="row">

                                        <div className="col-md-6 pb-4">
                                            <div className="border" style={{ borderRadius: "1em", paddingTop: "12px" }}>
                                                <ul className="nav nav-tabs row" role="tablist">
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-left active text-muted" data-toggle="tab" href="#panel555" role="tab" style={{ paddingRight: "24px" }}>
                                                            Cable TV</a>
                                                    </li>
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-right text-muted" data-toggle="tab" href="#panel666" role="tab" style={{ paddingRight: "72px" }}>
                                                            Internet
                                                    </a>
                                                    </li>
                                                </ul>


                                                <div className="tab-content">

                                                    <div className="tab-pane fade in show active off_show" id="panel555" role="tabpanel">
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
                                                                            <img src="static/img/dstv.jpg" alt="" className="img-fluid" />
                                                                    &ensp;
                                                                    <span className="font-weight-bold">DStv</span>
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
                                                                                DSTV Premium @ NGN17,500
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
                                                                            <img src="static/img/mtn.png" alt="" className="img-fluid" />
                                                                    &ensp;
                                                                    <span className="font-weight-bold">MTN</span>
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
                                <div className="col-md-2 card-header text-center">

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

export default InternetSub;
