import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from "../containers/Home";
import ProductPage from "../containers/ProductPage";
import Calculator from "../containers/Calculator";
export class Urls extends Component {

    render() {

        return (
            <div>
                {/* <BrowserRouter> */}
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={ProductPage} />
                        <Route exact path="/calculator" component={Calculator} />
                    </Switch>
                </Router>
                {/* </BrowserRouter> */}

                <Helmet>
                    {/* <script src="static/js/script.js" type="text/javascript" /> */}
                </Helmet>
            </div>
        )
    }
}

export default Urls;

