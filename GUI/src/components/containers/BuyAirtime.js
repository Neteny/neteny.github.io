import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../base/SideBar"

export class BuyAirtime extends Component {
    render() {
        return (

            <div>
                <div className="page-wrapper chiller-theme toggled">
                    <SideBar />
                    <main className="page-content border">
                        <div className="container-fluid">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-md-9">
                                    <div className="row">

                                        <div className="container">
                                            <h2>Dynamic Tabs with jQuery</h2>
                                            <p>Click on the Tabs to display the active and previous tab.</p>
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a href="#home">Home</a></li>
                                                <li><a href="#menu1">Menu 1</a></li>
                                                <li><a href="#menu2">Menu 2</a></li>
                                                <li><a href="#menu3">Menu 3</a></li>
                                            </ul>

                                            <div className="tab-content">
                                                <div id="home" className="tab-pane fade in active">
                                                    <h3>HOME</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                                <div id="menu1" className="tab-pane fade">
                                                    <h3>Menu 1</h3>
                                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                                <div id="menu2" className="tab-pane fade">
                                                    <h3>Menu 2</h3>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                </div>
                                                <div id="menu3" className="tab-pane fade">
                                                    <h3>Menu 3</h3>
                                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <p className="act"><b>Active Tab</b>: <span></span></p>
                                            <p className="prev"><b>Previous Tab</b>: <span></span></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-3 card-header text-center">

                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>


        )
    }
}

export default BuyAirtime;
