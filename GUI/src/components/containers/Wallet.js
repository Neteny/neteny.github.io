import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar"


export class Wallet extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main class="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="border p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <span className="rounded-circle bg-success text-white p-2">N</span>
                                                    &ensp;
                                                    <span className="text-success font-weight-bold">Naira Wallet</span>
                                                </div>
                                                <div className="py-4">
                                                    <p className="h1" style={{ fontFamily: "Avenir" }}>
                                                        NGN 0.00
                                                    </p>
                                                </div>
                                                <div className="row border border-success rounded-lg text-success text-center mx-1">
                                                    <div className="col-6 border-right border-success">
                                                        <span className="py-2">TRANSFER</span>
                                                    </div>

                                                    <div className="col-6">
                                                        <span className="py-2">DEPOSIT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pb-2">
                                            <div className="border p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <sup className="text-muted " style={{ fontSize: "8px" }}>ACCOUNT NAME</sup>
                                                    <p>Ciroma Chukwuma Adekunle</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <sup className="text-muted " style={{ fontSize: "8px" }}>ACCOUNT NUMBER</sup>
                                                        <p>30944466789</p>
                                                    </div>

                                                    <div className="col-6">
                                                        <sup className="text-muted " style={{ fontSize: "8px" }}>BANK NAME</sup>
                                                        <p>Mainstreet Bank</p>
                                                    </div>
                                                </div>
                                                <div className="row border border-success rounded-lg text-success text-center mx-1">
                                                    <div className="col-6 border-right border-success">
                                                        <span className="py-2">COPY NUMBER</span>
                                                    </div>

                                                    <div className="col-6">
                                                        <span className="py-2">COPY DETAILS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="col-12 text-muted text-left py-3" style={{ fontSize: "10px" }}>PAY BILLS</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 pb-2">
                                            <div className="shadow text-center p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <img src="static/img/variety/smartphone.png" alt="" className="img-fluid" />
                                                </div>
                                                <p><span>Buy Airtime or data</span></p>
                                                <Link to="" className="text-white btn-success btn-sm rounded-pill text-white" id="">
                                                    Buy Now <i className="la la-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 pb-2">
                                            <div className="shadow text-center p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <img src="static/img/variety/idea.png" alt="" className="img-fluid" />
                                                </div>
                                                <p><span>Cable TV/Internet Subscription</span></p>
                                                <Link to="" className="text-white btn-success btn-sm rounded-pill text-white" id="">
                                                    Buy Now <i className="la la-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 pb-2">
                                            <div className="shadow text-center p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <img src="static/img/variety/television.png" alt="" className="img-fluid" />
                                                </div>
                                                <p><span>Electricity Bills Payment</span></p>
                                                <Link to="" className="text-white btn-success btn-sm rounded-pill text-white" id="">
                                                    Buy Now <i className="la la-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 pb-2">
                                            <div className="shadow text-center p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <img src="static/img/variety/cash.png" alt="" className="img-fluid" />
                                                </div>
                                                <p><span>Airtime to Cash</span></p>
                                                <br />
                                                <Link to="" className="text-white btn-success btn-sm rounded-pill text-white" id="">
                                                    Trade Now <i className="la la-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 pb-2">
                                            <div className="shadow text-center p-3" style={{ borderRadius: "1em" }}>
                                                <div>
                                                    <img src="static/img/variety/test.png" alt="" className="img-fluid" />
                                                </div>
                                                <p><span>Education</span></p>
                                                <br />
                                                <Link to="" className="text-white btn-success btn-sm rounded-pill text-white" id="">
                                                    Trade Now <i className="la la-angle-right"></i>
                                                </Link>
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

export default Wallet;
