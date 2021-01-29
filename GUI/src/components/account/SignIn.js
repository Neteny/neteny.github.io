import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authLogin, authCheckState } from '../../action/accountAction';
import { createMessage } from '../../action/alertAction';
import AccNav from "./AccNav";



export class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };
    static propTypes = {
        authLogin: PropTypes.func.isRequired,
        authCheckState: PropTypes.func.isRequired,
        is_authenticated: PropTypes.bool,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('clickspinner');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Signup";
        }, 10000);

        const { email, password } = this.state;
        this.props.authLogin(
            this.state.email,
            this.state.password,
        );
        this.props.authCheckState();
    };

    render() {
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            this.dataCreateForm.reset()
            this.props.history.push('/home');
        }
        const { email, password } = this.state;
        return (
            <div>
                <AccNav />
                <section>

                    <div className="container pt-5">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-md-4 mx-auto">
                                <p className="h2 font-weight-bold text-center py-3">Sign In </p>
                                <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="email"
                                            placeholder="Email Address"
                                            name="email"
                                            onChange={this.onChange}
                                            value={email}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.onChange}
                                            value={password}
                                            required
                                        />
                                    </div>
                                    <div className="text-right">
                                        <Link to="" className="text-right text-primary">
                                            <sup> Forgot your password?</sup>
                                        </Link>
                                    </div>
                                    <div className="pt-3">
                                        <button id="clickspinner" type="submit" className="btn btn-primary btn-block">Continue</button>
                                    </div>
                                </form>
                                <div className="text-center py-3">
                                    Don’t have an account?
                                 <Link to="/signup" className="text-right text-primary">
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
export default connect(mapStateToProps, { authLogin, authCheckState, createMessage })(SignIn);


