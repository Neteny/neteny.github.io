import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideBar from "../base/SideBar";

export class GiftCard extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main className="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">

                                <div className="col-md-9">
                                    <div class="tab border-top border-bottom row text-center">
                                        <div className="col mx-auto">
                                            <button class="tablinks active" onClick={(event) => openCity(event, 'Buy')}>Buy</button>
                                        </div>
                                        <div className="col mx-auto">
                                            <button class="tablinks" onClick={(event) => openCity(event, 'Sell')}>Sell</button>
                                        </div>
                                    </div>
                                    <div id="Buy" class="tabcontent" style={{ display: "block" }}>
                                        <div>
                                            <form className="py-2">
                                                <input type="text" className="form-control form-control-lg" placeholder="Search" />
                                            </form>
                                        </div>
                                        <div className="row">
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/apple-card.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/dominos.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/gift-card.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/home-card.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/uber-card.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                            <div className="col-4 mx-auto">
                                                <img src="static/img/other-card.png" alt="" className="img-fluid" />
                                                <figcaption className="text-muted h6">
                                                    Apple Gift Card
                                                </figcaption>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Sell" class="tabcontent" style={{ display: "block" }}>
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

export default GiftCard;
