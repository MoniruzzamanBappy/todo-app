import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer text-white  bg-dark font-small blue pt-4">
    <div className="container-fluid container text-md-left">
        <div className="row">
            <div className="col-md-6 align-items-center d-flex mt-md-0 mt-3">
                <img className=' img-fluid' style={{height: '80px', width: '80px'}} src='verified.png' alt="logo" />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">About Online TODO</a></li>
                    <li><a className="nav-link text-white" href="#!">Read our Blog</a></li>
                    <li><a className="nav-link text-white" href="#!">Signup to be Happy</a></li>
                    <li><a className="nav-link text-white" href="#!">Add your TODO</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">Get Helps</a></li>
                    <li><a className="nav-link text-white" href="#!">Read FAQs</a></li>
                    <li><a className="nav-link text-white" href="#!">View All Todo</a></li>
                    <li><a className="nav-link text-white" href="#!">Branches near me</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="row copyright container">
        <p className="text-muted col-md-5 col-sm-3">Copyright © {new Date().getFullYear()}  To Do list</p>
        <div className="col-md-7 row col-sm-9  ms-auto footer-a">
        <a className="text-white col-md-4 col-sm-12 ps-5" href="/">Privacy Policy.</a>
        <a className="text-white col-md-4 col-sm-12 ps-5" href="/">Terms of Use</a>
        <a className="text-white col-md-4 col-sm-12 ps-5" href="/">Pricing</a>
        </div>
    </div>

</footer>
    );
};

export default Footer;