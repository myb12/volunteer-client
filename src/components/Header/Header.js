import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLogOut = () => {
        logOut();
        history.push('/');
    }


    return (
        <Container className="header">
            <Navbar bg="***" variant="light" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Nav className="ms-auto customNav">
                    {/* <Nav.Link href="#">Home</Nav.Link> */}
                    <Link to="/home" className="custom-link">Home</Link>
                    <Nav.Link href="#">Donation</Nav.Link>
                    <Link to="/events" className="custom-link">Events</Link>
                    {
                        user.email && <Nav.Link href="#">{user.displayName}</Nav.Link>
                    }
                    <Link to="#" >
                        <Button variant="primary" className="customButton">Register</Button>
                    </Link>
                    {
                        user.email ?
                            <Button onClick={handleLogOut} variant="primary" className="customButton">Logout</Button>
                            :
                            <Link to="/login">
                                <Button variant="primary" className="customButton">Login</Button>
                            </Link>
                    }
                    <Link to="/admin">
                        <Button variant="dark" className="customButton" >Admin</Button>
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;