import React from 'react';
import Header from "../header/header";
import AddressBookService from "../../services/addressbook-service.js";
import ContactTable from "../contacts-table/contacts-table";
import addUser from "../../assets/icons/add-24px.svg";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactsArray: []
        };
        this.addressbookService = new AddressBookService();
    }

    componentDidMount() {
        this.getAllContacts();
    }

    getAllContacts = () => {
        console.log("get data");
        this.addressbookService
            .getContactDetails()
            .then(data => {
                console.log("data after get ", data.data);
                this.setState({
                    contactsArray: data.data
                });
            })
            .catch(err => {
                console.log("err after ", err);
            });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="home-div">
                    <div className="add-header">
                        <div className="person-txt">
                            Person Details
                        </div>
                        <div>
                            <Link to="/register" className="add-button">
                                <img className="add-img" src={addUser} alt="add" /> Add User
                            </Link>
                        </div>
                    </div>
                    <div>
                        <ContactTable contactsArray={this.state.contactsArray} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;