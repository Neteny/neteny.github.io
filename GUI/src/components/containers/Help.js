import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";
import Footer from "../base/Footer";


export class Help extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section id="" className="help_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto mt-5 pt-5 ">
                                <div data-aos="zoom-out" className="text-center">
                                    <p className="display-4 font-weight-bold text-white" id="sm_font">How can we help?</p>
                                    <form className="mx-auto col-md-8">
                                        <input type="text" placeholder="Search the help centre" className="form-control-lg col-12" />
                                    </form>
                                    <div className="text-white px-lg-5 row">
                                        <div className="px-1 card-body">
                                            <span className="">
                                                Quick Search:
                                        </span>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""><span className="rounded-pill text-white card-header">
                                                Giftcard trading
                                        </span>
                                            </Link>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""> <span className="rounded-pill text-white card-header">
                                                Perfect Money
                                        </span>
                                            </Link>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""><span className="rounded-pill text-white card-header">
                                                Trading Instructions
                                        </span>
                                            </Link>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""><span className="rounded-pill text-white card-header">
                                                CoinLynk Refill
                                        </span>
                                            </Link>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""><span className="rounded-pill text-white card-header">
                                                CoinLynk Pay
                                        </span>
                                            </Link>
                                        </div>

                                        <div className="px-1 card-body">
                                            <Link to=""><span className="rounded-pill text-white card-header">
                                                Payment
                                        </span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mx-auto text-center" data-aos="zoom-out" data-aos-delay="300">

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
                        {/* <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#fbde80a6" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#f95a879c" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#c864c98c" />
                        </g> */}
                    </svg>
                </section>
                <div className="text-center py-3">
                    <p className="h5">or quickly choose a category to find the help you need</p>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left pb-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Giftcard Trading</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Perfect Money</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Trading Instructions</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">CoinLynk Refill</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>



                            <div className="col-md-6 text-left pb-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">CoinLynk Pay</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Payment</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here..</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">PayPal Transaction</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Security</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.  </small>
                                </div>
                            </div>

                            <div className="col-md-6 text-left pb-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Bitcoin</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                            <div className="col-md-6 text-left pb-4" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-5">
                                    <p className="font-weight-bold">Gifts</p>
                                    <small>Patricia is the top platform for trading giftcards. Learn about giftcards here.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container border-top pt-5">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-md-6 mx-auto text-center">
                                <div className="pb-5">
                                    <p className="h2">Didn’t find an answer?</p>
                                    <small>You can always reach us 24/7 to get more information <br /> about our services.</small>
                                </div>

                                <div className="row">
                                    <div className="col-12 mx-auto pb-4">
                                        <div className="text-center card py-3">
                                            <div className="row">
                                                <div className="col-3 pt-4">
                                                    <i className="la la-envelope text-primary h1"></i>
                                                </div>
                                                <div className="col-6">
                                                    <p>Feel free to contact coinlynk support</p>
                                                    <Link to="" className="text-primary">support.coinlynk.com</Link>
                                                </div>
                                                <div className="col-3 pt-4">
                                                    <i className="la la-angle-right border rounded-circle text-dark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <div className="text-center card py-3">
                                            <div className="row">
                                                <div className="col-3 pt-4">
                                                    <i className="la la-phone text-primary h1"></i>
                                                </div>
                                                <div className="col-6">
                                                    <p>Give us a call, we’re happy to help</p>
                                                    <Link to="tel:+234 444 6636 894" className="text-primary">+234 444 6636 894</Link>
                                                </div>
                                                <div className="col-3 pt-4">
                                                    <i className="la la-angle-right border rounded-circle text-dark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Help;
