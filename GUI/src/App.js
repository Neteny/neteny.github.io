import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';

import Urls from "./components/base/Urls"
import Alerts from "./components/base/Alerts"

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};



class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Alerts />
                        <Urls />
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('coinlyn'));