import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SideBar from "../base/SideBar"
import Nav from "../base/Nav"
export class Home extends Component {
    render() {
        return (
            <div>

                <div className="page-wrapper chiller-theme toggled">

                    <SideBar />

                    <main class="page-content">
                        {/* <Nav /> */}
                        <section>
                            <div className="container">
                                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="col-12 mx-auto text-center">
                                        <p className="h2">Home</p>
                                        {/* <small>All payments are fast, secure and seamless. Receive and send <br /> digital assets instantly.</small> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Home;
