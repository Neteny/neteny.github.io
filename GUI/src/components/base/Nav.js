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
        // this.navClick();
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-light clearHeader">
                    <Link to="/" className="navbar-brand text-white mx-3"><strong className="h2 font-weight-bold">coinlynk</strong></Link>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="la la-bars h2 text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        <ul className="navbar-nav text-center mx-auto" id="shift_center">
                            <li className="nav-item">
                                <Link to="/product" className="nav-link text-white font-weight-bold" href="#">Product <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white font-weight-bold" href="#">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white font-weight-bold" href="#">Rates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-white font-weight-bold" href="#">Help</Link>
                            </li>

                        </ul>
                        <div className="float-lg-right text-center mx-auto">
                            <ul className="navbar-nav">
                                <li className="btn btn-info btn-sm rounded-pill  h6">
                                    <Link to="" className="text-white font-weight-bold">Sign in <i className="la la-angle-right"></i>
                                    </Link>
                                </li>
                                <li className="btn btn-dark btn-sm rounded-pill h6" style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}>
                                    <Link to="" className="text-white font-weight-bold">Get Started <i className="la la-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </nav>
                {/* 
                <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                    <div className="container d-flex align-items-center">
                        <div className="logo mr-auto">
                            <h1 className="text-light"> <Link to="/"><span>CoinLyn</span></Link></h1>
                        </div>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li> <button onClick={function () { alert("hello world"); }}>jgdgddh</button></li>
                                <li className="active">
                                    <Link to="/product" onClick={this.navClick} id="mob_nav_closer">
                                        <span className="h5">Product</span>
                                    </Link>
                                </li>
                                <li><Link to=""> <span className="h5">Company</span></Link></li>
                                <li><Link to=""> <span className="h5">Rates</span></Link></li>
                                <li><Link to=""> <span className="h5">Help</span></Link></li>
                                <li className="d-xl-none d-lg-none d-md-block my-2 btn btn-info rounded-pill mx-2 h6"><Link to="" className="text-white">Sign in <i className="la la-angle-right"></i></Link></li>
                                <li className="d-xl-none d-lg-none d-md-block my-2 btn btn-dark rounded-pill mx-2 h6" style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}><Link to="" className="text-white">Get Started <i className="la la-angle-right"></i></Link></li>
                            </ul>
                        </nav>
                        <nav className="d-none d-lg-block d-sm-none d-md-none">
                            <li className="btn btn-info rounded-pill mx-2 h6"><Link to="" className="text-white">Sign in <i className="la la-angle-right"></i></Link></li>
                            <li className="btn btn-dark rounded-pill mx-2 h6" style={{ backgroundColor: '#011B33 0% 0% no-repeat padding-box' }}><Link to="" className="text-white">Get Started <i className="la la-angle-right"></i></Link></li>
                        </nav>
                    </div>
                </header>
             */}
            </div>
        )
    }
}

export default Nav;
