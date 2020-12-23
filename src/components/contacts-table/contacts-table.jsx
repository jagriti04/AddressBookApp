import React from 'react';
import { withRouter } from "react-router-dom";
import './contacts-table.css';

const ContactTable = (props) => {
    return (
        <div className="tableDiv">
            <table className="table">
                <tbody>
                    <tr key={-1}>
                        <th> Full Name </th>
                        <th> Address </th>
                        <th> City </th>
                        <th> State </th>
                        <th> Zip code </th>
                        <th> Phone No.</th>
                        <th> Actions </th>
                    </tr>
                    {props.contactsArray &&
                        props.contactsArray.map((element, ind) => (
                            <tr key={ind}>
                                <td>
                                   {element.name}
                                </td>
                                <td> {element.address} </td>
                                <td> {element.city} </td>
                                <td>
                                    {element.state}
                                </td>
                                <td> {element.zip} </td>
                                <td> {element.phone} </td>
                                <td>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default withRouter(ContactTable);