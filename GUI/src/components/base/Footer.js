import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Footer extends Component {
    render() {
        return (
            <div>
                <section id="about" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                    <div className="container-fluid">
                        <div className="row" data-aos="fade-up" data-aos-delay="50">
                            <div className="col-md-10 col-sm-12  mx-auto text-center py-5" style={{ fontFamily: 'system-ui', background: '#011b33', borderRadius: "1.5em" }}>
                                <img src="static/img/bitcoin_badge.png" alt="" className="img-fluid pb-3" id="bitcoin_badge" />
                                <p className="h2 text-white pb-3">Start buying bitcoin now</p>
                                <Link to="" className="rounded-pill btn-white btn-sm">
                                    Get Started  <i className="la la-angle-right"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="footer-sec" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                    <div className="container-fluid border">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <p className="text-left"><b>Subscribe to our newsletter</b></p>
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control rounded-pill" placeholder="Your e-mail address" />
                                        <div className="input-group-append" style={{ position: "relative", left: '-55px', zIndex: 99 }}>
                                            <span className="input-group-text rounded-pill text-white" style={{ background: 'rgb(1, 27, 51)' }}>Subscribe <i className="la la-angle-right"></i></span>
                                        </div>
                                        <div className="row col-12 mt-5">
                                            <i className="lab la-twitter px-3 h4"></i>
                                            <i className="lab la-facebook-square px-3 h4"></i>
                                            <i className="lab la-instagram px-3 h4"></i>
                                            <i className="lab la-linkedin px-3 h4"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                <p className="text-left"><b>Product</b></p>
                                <li>Currency Exchange</li>
                                <li> Service Payments</li>
                                <li> Bitcoin</li>
                                <li> Wallet</li>
                                <li> Giftcards</li>
                            </ul>

                            <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                <p className="text-left"><b>Support</b></p>
                                <li>Privacy Policy</li>
                                <li> Terms of Use</li>
                            </ul>
                            <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                <p className="text-left"><b>Legal</b></p>
                                <li>About Us</li>
                                <li> Contact </li>
                                <li>FAQs</li>
                            </ul>
                            <ul style={{ listStyle: "none" }} className="col-md-2 text-left">
                                <p className="text-left"><b>Company</b></p>
                                <li>Affiliate Program</li>
                                <li>  Customer Reviews</li>
                            </ul>
                        </div>
                        <div className="col-10 mx-auto border-top  text-center mb-5">
                            <p className="py-4">
                                <small>CoinLynk is a property of Lorem Technologies Limited,
                                a company duly registered with CAC with RC Number: 1484208.
                                Account numbers and Verve Cards are provided by Rubies Microfinance Bank
                                , a company duly registered under the Laws of the Federal Republic of Nigeria;
                                and duly licensed by the Central Bank of Nigeria, and pursuant to
                                       the rules of Verve International Limited.</small>
                            </p>
                            <small className="">
                                CoinLynk 2020. All Rights Reserved.
                                </small>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;
