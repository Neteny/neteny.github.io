import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../../assets/sidebar.css';
export class SideBar extends Component {
    render() {
        var urlElements = window.location.href.split('/');
        urlElements.reverse()[0]
        var page = urlElements[0]
        return (
            <div style={{ fontFamily: "system-ui" }}>
                <a id="show-sidebar" className="btn btn-sm text-center show-sidebar">
                    {/* <i className="h4 las la-bars"></i> */}
                    <i className="h4 las la-angle-right"></i>
                </a>

                <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                    <span className="main_nav_2">
                        <a className="navbar-brand font-weight-bold">{page.toUpperCase()}</a>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse off_show text-center sub_nav_2" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <strong> <a className="nav-link" href="#">Statistic</a></strong>
                            </li>
                            <li className="nav-item px-1">
                                <Link className="nav-link border rounded-pill bg-white" to="/home">
                                    <i className="las la-bell"></i>
                                </Link>
                            </li>
                            {/* <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Dropdown</button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li> */}

                            <li className="nav-item dropdown off_show" style={{ position: "static" }}>
                                <a className="nav-link dropdown-toggle  border rounded-pill px-md-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="pr-md-2">
                                        <i className="las la-user bg-secondary rounded-circle"></i>
                                    </span>
                                </a>
                                <div className="dropdown-menu off_show" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>

                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="#" className="h6 text-white">
                                <img src="static/img/icons/logo.png" alt="" className="img-fluid" style={{ width: "12%" }} />
                                <span style={{ fontFamily: "system-ui", fontStyle: "system-ui" }}> coinlynk </span>
                            </a>
                            <div id="close-sidebar">
                                <strong> <i className="las la-times"></i></strong>
                            </div>
                        </div>



                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu">
                                    <span>&ensp;</span>
                                </li>
                                <li className="">
                                    <a href="#" className="card-header rounded-pill">
                                        <i className="la la-home"></i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <i className="las la-wallet"></i>
                                        <span>Wallet</span>

                                    </a>

                                </li>
                                <li className="">
                                    <a href="#">
                                        <i className="las la-credit-card"></i>
                                        <span>Cards</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <i className="las la-exchange-alt"></i>
                                        <span>Exchange</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <i className="las la-clock"></i>
                                        <span>Transactions</span>
                                    </a>
                                </li>
                                <li className="header-menu">
                                    <span>TRADE</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="lab la-bitcoin"></i>
                                        <span>Bitcoin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="las la-gift"></i>
                                        <span>Giftcards</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="las la-landmark"></i>
                                        <span>Perfect Money</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="lab la-cc-paypal"></i>
                                        <span>Paypal Funds</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="border-top pl-4 pt-3">
                                <p>
                                    <Link to="" className="text-white">
                                        <i className="las la-cog"></i>
                                        &ensp;Settings
                        </Link>
                                </p>
                                <p>
                                    <Link to="" className="text-white">
                                        <i className="las la-sign-out-alt"></i>
                                        &ensp; Logout
                        </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                    <Helmet>
                        <script src="static/js/sidebar.js" type="text/javascript" />
                    </Helmet>
                </nav>

            </div>

        )
    }
}

export default SideBar
