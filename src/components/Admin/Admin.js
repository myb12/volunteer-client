import React from 'react';
import { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './Admin.css';

const Admin = () => {
    const [active, setActive] = useState(true);
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                    </Link>
                    <Link to="#" onClick={() => setActive(!active)} className="admin-navLink my-2 font-weight-bold">
                        <img src="https://i.imgur.com/9AOzR42.png" alt="volunteer" />
                        Volunteer register list
                    </Link>
                    <Link to="#" onClick={() => setActive(!active)} className="admin-navLink my-2 font-weight-bold">
                        <img src="https://i.imgur.com/NMYvbXy.png" alt="addEvent" />
                        Add event
                    </Link>
                </div>
                {
                    active ?
                        <div className="col-md-9">
                            <h5 className="my-4 ml-2 font-weight-bold text-left">Volunteer register list</h5>
                            <div className="row">
                                <Table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Registration date</th>
                                            <th>Volunteer list</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(3)].map(el =>
                                                <tr>
                                                    <td>Mohammad Yasin</td>
                                                    <td>yasin@gmail.com</td>
                                                    <td>20/10/2021</td>
                                                    <td>Activity Name</td>
                                                    <td>
                                                        <button className="delete-icon rounded">
                                                            <img className="trash-icon" src="https://i.imgur.com/gxmzamg.png" alt="delete" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        :
                        <div className="col-md-9">
                            <h5 className="my-4 ml-2 font-weight-bold text-left">Add Event</h5>
                            <div className="row">
                                <form>
                                    <div className="d-flex">
                                        <div className="me-2">
                                            <label className="me-2">Event Title</label>
                                            <input name="title" type="text" />
                                        </div>
                                        <div>
                                            <label className="me-2">Event date</label>
                                            <input name="to" type="date" />
                                        </div>
                                    </div>
                                    <Button type="submit" variant="warning" className="my-3 font-weight-bold" >
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </Container>
    );
};

export default Admin;