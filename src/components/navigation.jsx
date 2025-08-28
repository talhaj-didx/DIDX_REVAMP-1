import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img 
            src={"img/didx-logo.png"} 
            alt="DIDX Logo" 
            style={{ height: "60px" }}
          />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/buy-did">Buy DID</Link></li>
            <li><Link to="/sell-did">Sell DID</Link></li>
            <li><Link to="/rates">Rates</Link></li>
            {/* <li><Link to="/features">Features</Link></li> */}
            <li><Link to="/coverage">Coverage</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
