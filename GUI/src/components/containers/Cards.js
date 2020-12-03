import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar";

export class Cards extends Component {
    render() {
        return (
            <div>

                <div className="page-wrapper chiller-theme toggled">

                    <SideBar />

                    <main class="page-content border">

                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">

                                <div className="col-md-9">
                                    <section>
                                        <div className="container">
                                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                                <div className="col-12 mx-auto text-center px-lg-5">
                                                    <p className="h2 font-weight-bold">CoinLynk Card</p>
                                                    <p className="text-center px-lg-5">
                                                        <span className="">
                                                            Pay your bills and make everyday purchases, without carrying cash around.
                                                            Your Patricia debit cards offer you the convenience and security you need
                                                            while you spend your money.
                                                   </span>
                                                    </p>
                                                    <div className="text-center pt-4">
                                                        <Link to="/calculator" className="rounded-pill btn btn-success text-white btn-sm">
                                                            Get Started <i className="la la-angle-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-8 mx-auto text-center p-lg-5">
                                                    <img src="static/img/cards.png" alt="" className="img-fluid" />
                                                </div>

                                            </div>
                                        </div>
                                    </section>
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

export default Cards;
