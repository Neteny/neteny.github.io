import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar";


export class Settings extends Component {
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
                                            <div className="border p-2" style={{ borderRadius: "1em" }}>
                                                <p className="py-2 text-left"> Profile</p>
                                                <div className="form-group">
                                                    <sup className="text-muted" style={{ fontSize: "10px" }}>FIRST NAME</sup>
                                                    <input type="text" className="form-control form-control-lg" placeholder="FIRST NAME" />
                                                </div>
                                                <div className="form-group">
                                                    <sup className="text-muted" style={{ fontSize: "10px" }}>LAST NAME</sup>
                                                    <input type="text" className="form-control form-control-lg" placeholder="LAST NAME" />
                                                </div>
                                                <div className="form-group">
                                                    <sup className="text-muted" style={{ fontSize: "10px" }}>EMAIL ADDRESS</sup>
                                                    <input type="text" className="form-control form-control-lg" placeholder="EMAIL ADDRESS" />
                                                </div>
                                                <div className="form-group">
                                                    <sup className="text-muted" style={{ fontSize: "10px" }}>PHONE NUMBER</sup>
                                                    <input type="text" className="form-control form-control-lg" placeholder="PHONE NUMBER" />
                                                </div>
                                                <div className="col-md-6 pb-2">
                                                    <button type="submit" className="btn-success btn-sm rounded-pill">Edit Profile <i className="la la-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="border-top border-right border-left p-2" style={{ borderRadius: "1em" }}>
                                                <p className="py-2 text-left"> Change picture</p>
                                                <div className="row">
                                                    <sup className="col-12 text-muted pb-2" style={{ fontSize: "10px" }}>Maximum file size for profile avatar is 20mb</sup>
                                                    <div className="form-group col-6">

                                                        <i className="la la-user display-1 rounded-circle bg-secondary text-white"></i>
                                                    </div>
                                                    <div className="form-group col-6 pt-lg-5">
                                                        <label htmlFor="img_file">
                                                            <input type="file" id="img_file" className="col btn-success btn-sm rounded-pill" placeholder="FIRST NAME" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border p-2 mt-5" style={{ borderRadius: "1em" }}>
                                                <p className="py-2 text-left"> Referrals</p>
                                                <div className="row">
                                                    <sup className="col-12 text-muted pb-2" style={{ fontSize: "10px" }}>REFERRAL CODE</sup>
                                                    <div className="form-group col-6">
                                                        <span className="">6UJK908</span>
                                                    </div>
                                                    <div className="form-group col-6">
                                                        <Link to="">
                                                            <i class="float-right las la-copy rounded-circle border border-secondary p-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <sup className="col-12 text-muted pb-2" style={{ fontSize: "10px" }}>REFERRAL LINK</sup>
                                                    <div className="form-group col-6">
                                                        <Link to="">bit.ly/coinlynkuser66754434</Link>
                                                    </div>
                                                    <div className="form-group col-6 ">
                                                        <Link to="">
                                                            <i class="float-right las la-copy rounded-circle border border-secondary p-2"></i>
                                                        </Link>
                                                    </div>
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

export default Settings;
