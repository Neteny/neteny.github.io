import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from "../containers/Home";
import ProductPage from "../containers/ProductPage";
import Calculator from "../containers/Calculator";
import BitcoinPage from "../containers/BitcoinPage";
export class Urls extends Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/product" component={ProductPage} />
                            <Route exact path="/calculator" component={Calculator} />
                            <Route exact path="/bitcoinpage" component={BitcoinPage} />
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

