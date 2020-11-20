import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from "../base/Nav";
import Footer from "../base/Footer";

export class Calculator extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="product_page" style={{ fontFamily: "system-ui" }}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-10 mx-auto pt-5">
                                <div data-aos="zoom-out">
                                    <p className="text-white h1" id="prod_page_top">
                                        Products tailored to <br /> give you the best
                                         </p>
                                    <p className="pt-3">
                                        <small className="text-white">
                                            CoinLynk uses the power of blockchain and cryptocurrency to <br /> solve your everyday needs.
                                        </small>
                                    </p>
                                    <div className="text-center">
                                        <Link to="" className="rounded-pill btn btn-dark"
                                            style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}>
                                            Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <svg className="hero-waves"
                        xmlns=""
                        xmlnsXlink=""
                        viewBox="0 24 200 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#f4c1a3" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#ec8e72" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#f3bea1" />
                        </g>
                    </svg>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Calculator;
