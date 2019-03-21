import React, {Component} from 'react';
import './css/Header.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import imglogo from './../assets/logo.png';

class Header extends Component{
    render(){
        return(
            // <header className="masthead mb-auto">
            //     <div className="inner">
            //         <h1>GoTrip</h1>
            //         <nav className="nav nav-masthead justify-content-center">
            //             <a className="nav-link" href="#">Home</a>
            //             <a className="nav-link" href="#">About</a>
            //         </nav>
            //     </div>
            // </header>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <a className="navbar-brand" href="#">
                        <img className="imglogo" src={imglogo}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead justify-content-center">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Booking</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Travel-Packages</a>
                            </li>
                            <li className="nav-item active">
                            <Link to="/customer/Tailor" className="nav-link">Tailor-Made Tour</Link>
                                
                            </li>
                            
                        </ul>
                    </nav>
                    {/* <div className="main-menubar d-flex align-items-center">
                        <div className="main-menubar d-flex align-items-center">
                            <nav className="hide">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                            </nav>
                        </div>
                        <div class="menu-bar">
                            <span class="Inr Inr-menu">
                                ::before
                            </span>
                        </div>
                    </div> */}
                </nav>
            </header>
        )
    }
}
export default Header;