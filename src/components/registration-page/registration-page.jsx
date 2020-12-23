import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/header";
import "./registration-page.css";

const RegistrationPage = (props) => {

    return (
        <div className="register-div">
            <Header />
            <div className="form-div">
                <div className="form-header">
                    PERSON ADDRESS FORM
                </div>
                <form className="form">
                    <div className="row">
                        <label >
                            Full Name: <br />
                            <input className="input-div" type="text" name="name" />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Phone Number: <br />
                            <input className="input-div" type="text" name="phone" />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Address: <br />
                            <textarea className="input-div" name="address"></textarea>
                        </label>
                    </div>
                    <div className="row city-state-div">
                        <span className="city-state">
                            <label>
                                City:
                                <select value="select city">
                                    <option value="pune">Pune</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="kota">Kota</option>
                                    <option value="bhopal">Bhopal</option>
                                </select>
                            </label>
                        </span>
                        <span className="city-state">
                            <label>
                                State:
                                <select >
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="MP">MP</option>
                                    <option value="UP">UP</option>
                                </select>
                            </label>
                        </span>
                        <span className="city-state">
                            <label>
                                Zip code:
                                <input className="zip-div" type="text" name="zip" />
                            </label>
                        </span>
                    </div>
                    <div className="submit-reset row">
                        <button type="submit"
                            className="button submitButton"
                            id="submitButton"
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            className="resetButton button">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default withRouter(RegistrationPage);