import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Nav2 extends Component {
    render() {
        return (

            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-light clearHeader bg-white border" id="">
                    <Link to="/" className="navbar-brand mx-4"><strong className="h2 font-weight-bold">Home</strong></Link>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="la la-bars h2 text-white"></span>
                    </button>

                    <span className="nav-item float-left">
                        <Link to="/product" className="nav-link text-white" href="#">| &ensp;Help Center <span className="sr-only">(current)</span></Link>
                    </span>

                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">

                        < ul className="navbar-nav text-center mx-auto" id="shift_center_1">
                            <li className="nav-item">
                                <Link to="/product" className="nav-link text-white" href="#">Product <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white" href="#">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white" href="#">Rates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white" href="#">Help</Link>
                            </li>
                        </ul>

                        <div className="float-lg-right text-center mx-auto" id="shift_center_2">
                            <ul className="navbar-nav">
                                <li className="btn btn-sm rounded-pill" id="custom_btn_light_blue">
                                    <Link to="" className="text-white">Sign in <i className="la la-angle-right"></i>
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

            </div >

        )
    }
}

export default Nav2
