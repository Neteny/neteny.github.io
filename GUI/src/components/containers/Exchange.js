import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideBar from "../base/SideBar";

export class Exchange extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main className="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9 border" style={{ borderRadius: "1em" }}>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h6 className="buy_bit pb-2">
                                                <b>From</b>
                                            </h6>
                                            <small className="text-muted">SELECT WALLET</small>
                                            <div className="form-group">
                                                <div className="border px-3 rounded-lg">
                                                    <div className="mt-4 mb-0">
                                                        <label htmlFor="air_select">
                                                            <span className="rounded-circle bg-warning text-white p-2">B</span>
                                                                    &ensp;
                                                                    <span className="font-weight-bold">BTC</span>
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

                                        <div className="text-center mx-sm-auto la_sync">
                                            <i className="las la-sync h1 text-success"></i>
                                        </div>

                                        <div className="col-md-5">
                                            <h6 className="buy_bit pb-2">
                                                <b>To</b>
                                            </h6>
                                            <small className="text-muted">SELECT WALLET</small>
                                            <div className="form-group">
                                                <div className="border px-3 rounded-lg">
                                                    <div className="mt-4 mb-0">
                                                        <label htmlFor="air_select">
                                                            <span className="rounded-circle bg-primary text-white p-2">$</span>
                                                                    &ensp;
                                                                    <span className="font-weight-bold">Dollars</span>
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

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5">
                                            <small className="text-muted">ENTER AMOUNT</small>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" placeholder="1.00 BTC" />
                                            </div>
                                        </div>

                                        <div className="text-center mx-sm-auto">
                                            {/* <i className="las la-sync h1 text-success"></i> */}
                                        </div>

                                        <div className="col-md-5">
                                            <small className="text-muted">ENTER AMOUNT</small>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" placeholder="$ 15,754" />
                                            </div>
                                        </div>
                                        <div className="col-12 pt-3">
                                            <button className="btn btn-success btn-block">Exchange</button>
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

                                            <ul id="faq4" className="collapse off_show col-12 text-justify" data-parent=".faq-list" style={{ listStyle: "none" }}>
                                                We’ll send your bitcoin within 15 minutes of payment approval or get your next transaction fee free.
    </ul>
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

export default Exchange;
