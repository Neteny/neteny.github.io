import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar"

export class BuyAirtime extends Component {
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

                                        <div className="col-md-6 pb-4">
                                            <div className="col-12 mx-auto border-right border-left" style={{ borderRadius: "1em" }}>
                                                <ul className="nav nav-tabs row float-center text-center" role="tablist">
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-left active text-muted" data-toggle="tab" href="#panel555" role="tab">
                                                            Airtime</a>
                                                    </li>
                                                    <li className="nav-item col-6">
                                                        <a className="nav-link-right text-muted" data-toggle="tab" href="#panel666" role="tab">
                                                            Data
                                                    </a>
                                                    </li>
                                                </ul>


                                                <div className="tab-content">
                                                    <div className="tab-pane fade in show active off_show" id="panel555" role="tabpanel">
                                                        <sup className="text-muted " style={{ fontSize: "8px" }}>SELECT WALLET</sup>
                                                        <div>
                                                            <div className="form-group">
                                                                <select
                                                                    className="digital_asset_1"
                                                                    searchable="Search here.."
                                                                    defaultValue={"Select Country"}>
                                                                    <span className="rounded-circle bg-success text-white p-2">N</span>
                                                                 &ensp;
                                                            <span className="font-weight-bold">Naira Wallet</span>
                                                                    <option disabled>Select Country</option>
                                                                    <option>Nigeria</option>
                                                                    <option>Finland</option>
                                                                    <option>Swiden</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>



                                                    <div className="tab-pane fade" id="panel666" role="tabpanel" style={{ backgroundColor: 'white' }}>
                                                        <p className="">Buy Section</p>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 text-center mx-auto">
                                            <div className="border" id="pad_cal_result" style={{ borderRadius: "1em" }}>
                                                <p className="font-weight-bold text-dark h5 text-center">Total Payout</p>
                                                <p className="text-dark display-3">NGN 0.00</p>
                                                <p className="font-weight-bold text-muted">Rate: NGN 0.00</p>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <div className="col-md-3 card-header text-center">

                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>


        )
    }
}

export default BuyAirtime;
