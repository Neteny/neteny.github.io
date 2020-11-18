import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from "../containers/Home";

export class Urls extends Component {

    render() {

        return (
            <div>
                {/* <BrowserRouter> */}
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}

export default Urls;

