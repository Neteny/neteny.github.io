import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSignup, authCheckState } from '../../action/accountAction';
import { createMessage } from '../../action/alertAction';
import AccNav from "./AccNav";


export class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    static propTypes = {
        authSignup: PropTypes.func.isRequired,
        authCheckState: PropTypes.func.isRequired,
        is_authenticated: PropTypes.bool,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('signupspin');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Signup";
        }, 15000);

        const { firstName, lastName, email, password } = this.state;
        this.props.authSignup(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
        );
        this.props.authCheckState();
    };

    render() {
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            this.dataCreateForm.reset()
            this.props.history.push('/signin');
        }
        const { firstName, lastName, email, password } = this.state;
        return (
            <div>
                <AccNav />
                <section>
                    <div className="container pt-5">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-md-4 mx-auto">
                                <p className="h2 font-weight-bold text-center py-3">Create your account </p>
                                <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el}>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                aria-describedby="firstName"
                                                placeholder="First Name"
                                                name="firstName"
                                                onChange={this.onChange}
                                                value={firstName}
                                                required />
                                        </div>
                                        <div className="col-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                aria-describedby="last name"
                                                placeholder="Last Name"
                                                name="lastName"
                                                onChange={this.onChange}
                                                value={lastName}
                                                required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="reg_email"
                                            aria-describedby="email"
                                            placeholder="Email Address"
                                            name="email"
                                            onChange={this.onChange}
                                            value={email}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            aria-describedby="Password"
                                            id="Password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.onChange}
                                            value={password}
                                            required />
                                    </div>
                                    <div className="">
                                        <input type="checkbox" className="form-check-input" id="termsandcondition" required />
                                        <label className="form-check-label" htmlFor="termsandcondition">
                                            I certify that I am 18 years of age or older, and agree to the
                                            <Link to="">User Agreement</Link> and <Link to="">Privacy Policy</Link>.
                                            </label>
                                    </div>
                                    <div className="pt-3">
                                        <button id="signupspin" type="submit" className="btn btn-primary btn-block">Create Account</button>
                                    </div>
                                </form>
                                <div className="text-center py-3">
                                    Have an account?
                                 <Link to="/signin" className="text-right text-primary">
                                        <small> Sign In</small>
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

const mapStateToProps = (state) => ({
    is_authenticated: state.accountReducer.is_authenticated,
});

export default connect(mapStateToProps, { authSignup, authCheckState, createMessage })(SignUp);


