import React, {Component} from 'react';
import "./ComponentCSS/FooterComponent.css";
import {Row} from 'reactstrap';

class FooterComponent extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>Home</a></li>
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>About</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>Home</a></li>
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>About</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>Home</a></li>
                                <li><a href={"#"}><i className="fa fa-angle-double-right"/>About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href={"#"}><i className="fa fa-facebook"/></a></li>
                                <li className="list-inline-item"><a href={"#"}><i className="fa fa-twitter"/></a></li>
                                <li className="list-inline-item"><a href={"#"}><i className="fa fa-instagram"/></a></li>
                                <li className="list-inline-item"><a href={"#"} target="_blank"><i className="fa fa-envelope"/></a></li>
                            </ul>
                        </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p>Copyright © 2016 At Large Brewing & Taproom - All Rights Reserved</p>
                    </div>
            </div>
            </div>
    </section>
        );
    }
}

export default FooterComponent;
