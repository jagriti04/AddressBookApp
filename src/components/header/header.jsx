import React from 'react';
import "./header.css";
import logo from "../../assets/img/logo.png";

class Header extends React.Component {

    render() {
        return (
            <div className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt="logo" className="logo-img"/>
                    <div className="addressbook-text">
                        <span className="address-text">ADDRESS </span> <br />
                        <span>BOOK</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;