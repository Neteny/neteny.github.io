import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authCheckState, logout } from '../../action/accountAction';
import { createMessage } from '../../action/alertAction';

export class AccNav extends Component {
    static propTypes = {
        createMessage: PropTypes.func,
        logout: PropTypes.func.isRequired,
        is_authenticated: PropTypes.bool,
    };
    LogOut = () => {
        this.props.logout;
        this.props.createMessage({ logoutmsg: 'See You Soon!' });
    }
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-light clearHeader border">
                    <div>
                        <img src="static/img/blue_logo.png" alt="" className="img-fluid" height="25" width="25" />
                        <Link to="/" className="navbar-brand text-white mx-4"><strong className="h2 font-weight-bold text-primary">coinlynk</strong></Link>
                    </div>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="la la-bars h2 text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                        < ul className="navbar-nav text-center mx-auto" id="shift_center_1">
                            <li className="nav-item">
                                <Link to="/product" className="nav-link text-dark" href="#">Product <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-md-dark text-sm-white" href="#">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-md-dark text-sm-white" href="#">Rates</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-md-dark text-sm-white" href="#">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link text-md-dark text-sm-white" href="#">Learn</Link>
                            </li>
                        </ul>

                        <div className="float-lg-right text-center mx-auto" id="shift_center_2">
                            {!this.props.is_authenticated ?
                                <ul className="navbar-nav">
                                    <li className="btn btn-sm rounded-pill" id="custom_btn_light_blue">
                                        <Link to="/signin" className="text-dark"><b>Sign in <i className="la la-angle-right"></i></b>
                                        </Link>
                                    </li>
                                    <li className="btn btn-primary btn-sm rounded-pill  " id="custom_btn_dark">
                                        <Link to="/signup" className="text-white">Get Started <i className="la la-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav">
                                    <li className="btn-danger btn-sm rounded-pill" id="custom_btn_light_blue">
                                        <Link to="/" className="text-white" onClick={this.LogOut}><b>Sign Out <i className="la la-angle-right"></i></b>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </div>

                    </div>
                </nav>


            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    is_authenticated: state.accountReducer.is_authenticated,
});

export default connect(mapStateToProps, { authCheckState, logout, createMessage })(AccNav);

