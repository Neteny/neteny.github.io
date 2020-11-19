import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer-sec" className="about my_font" style={{ fontFamily: 'system-ui' }}>
                    <div className="container-fluid border">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <p className="text-left"><b>Subscribe to our newsletter</b></p>
                                <form>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control rounded-pill" placeholder="Your e-mail address" />
                                        <div class="input-group-append" style={{ position: "relative", left: '-55px', zIndex: 99 }}>
                                            <span class="input-group-text rounded-pill text-white" style={{ background: 'rgb(1, 27, 51)' }}>Subscribe <i className="la la-angle-right"></i></span>
                                        </div>
                                        <div className="row col-12 mt-5">
                                            <i class="lab la-twitter px-3 h4"></i>
                                            <i class="lab la-facebook-square px-3 h4"></i>
                                            <i class="lab la-instagram px-3 h4"></i>
                                            <i class="lab la-linkedin px-3 h4"></i>
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
                        <div className="col-10 mx-auto border-top  text-center">
                            <p className="py-5">
                                <small>CoinLynk is a property of Lorem Technologies Limited,
                                a company duly registered with CAC with RC Number: 1484208.
                                Account numbers and Verve Cards are provided by Rubies Microfinance Bank
                                , a company duly registered under the Laws of the Federal Republic of Nigeria;
                                and duly licensed by the Central Bank of Nigeria, and pursuant to
                                       the rules of Verve International Limited.</small>
                            </p>
                            <small>
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