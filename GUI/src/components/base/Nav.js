import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {

    constructor(props) {
        super(props);
        this.navClick = this.navClick.bind(this);
    }
    navClick() {
        var get_id = document.getElementById('mob_nav_closer');
        if (get_id) {
            alert('found')
        } else {
            alert('NOT found')
        }
    }

    render() {
        var urlElements = window.location.href.split('/');
        urlElements.reverse()[0]
        var page = urlElements[0]
        console.log(page)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-light clearHeader">
                    <Link to="/" className="navbar-brand text-white mx-4"><strong className="h2 font-weight-bold">coinlynk</strong></Link>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="la la-bars h2 text-white"></span>
                    </button>
                    {page == "help" ?
                        <span className="nav-item float-left">
                            <Link to="/product" className="nav-link text-white" href="#">| &ensp;Help Center <span className="sr-only">(current)</span></Link>
                        </span>
                        :
                        ""
                    }
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        {page != "help" ?
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
                            :
                            ""
                        }
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

export default Nav;
