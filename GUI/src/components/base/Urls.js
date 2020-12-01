import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LandingPage from "../containers/LandingPage";
import ProductPage from "../containers/ProductPage";
import Calculator from "../containers/Calculator";
import BitcoinPage from "../containers/BitcoinPage";
import DigitalAssets from "../containers/DigitalAssets";
import Airtime from "../containers/Airtime";
import WhatWeDo from "../containers/WhatWeDo";
import Help from "../containers/Help";
import Wallet from "../containers/Wallet";
import BuyAirtime from "../containers/BuyAirtime";
import SignIn from "../account/SignIn";
import Home from "../containers/Home";

export class Urls extends Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/product" component={ProductPage} />
                            <Route exact path="/calculator" component={Calculator} />
                            <Route exact path="/bitcoinpage" component={BitcoinPage} />
                            <Route exact path="/digitalassets" component={DigitalAssets} />
                            <Route exact path="/airtime" component={Airtime} />
                            <Route exact path="/whatwedo" component={WhatWeDo} />
                            <Route exact path="/help" component={Help} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/wallet" component={Wallet} />
                            <Route exact path="/buyAirtime" component={BuyAirtime} />
                        </Switch>
                    </Router>
                </BrowserRouter>

                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
                <div id="preloader"></div>
                <Helmet>
                    <script src="static/js/homeSlider.js" type="text/javascript" />
                </Helmet>

            </div>
        )
    }
}

export default Urls;

