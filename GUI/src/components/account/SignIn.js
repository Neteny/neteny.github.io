import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../base/Nav";


export class SignIn extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-light clearHeader border">
                    <Link to="/" className="navbar-brand text-white mx-4"><strong className="h2 font-weight-bold text-primary">coinlynk</strong></Link>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="la la-bars h2 text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        < ul className="navbar-nav text-center mx-auto" id="shift_center_1" style={{ left: "50px" }}>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link text-white" href="#">Product <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-dark" href="#">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-dark" href="#">Rates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-dark" href="#">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-dark" href="#">Learn</Link>
                            </li>
                        </ul>
                        <div className="float-lg-right text-center mx-auto" id="shift_center_2">
                            <ul className="navbar-nav">
                                <li className="btn btn-sm rounded-pill" id="custom_btn_light_blue">
                                    <Link to="" className="text-dark"><b>Sign in <i className="la la-angle-right"></i></b>
                                    </Link>
                                </li>
                                <li className="btn btn-sm rounded-pill" id="custom_btn_dark">
                                    <Link to="" className="text-white">Get Started <i className="la la-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                <section>

                    <div className="container pt-5">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-md-4 mx-auto">
                                <p className="h2 font-weight-bold text-center py-3">Sign In </p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="text-right">
                                        <Link to="" className="text-right text-primary">
                                            <sup> Forgot your password?</sup>
                                        </Link>
                                    </div>
                                    <div className="pt-3">
                                        <button type="submit" className="btn btn-primary btn-block">Continue</button>
                                    </div>
                                </form>
                                <div className="text-center py-3">
                                    Don’t have an account?
                                 <Link to="/signup" className="text-right text-primary">
                                        <small> Sign Up</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default SignIn;
