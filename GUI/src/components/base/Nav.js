import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<Link to="/login" className="btn btn-outline-muted">&ensp;LOGIN&ensp;</Link>
export class Nav extends Component {
    render() {
        return (
            <div>
                <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                    <div className="container d-flex align-items-center">
                        <div className="logo mr-auto">
                            {/* <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}
                        </div>
                        <nav className="nav-menu d-none d-lg-block mx-auto">
                            <ul>
                                <li className="active"><Link to="/product" href="#product_page"> <span className="h5">Product</span></Link></li>
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

            </div>
        )
    }
}

export default Nav;
