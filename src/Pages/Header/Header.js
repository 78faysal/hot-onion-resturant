import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import navImg from '../../Images/logo2.png';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home">
                        <img
                            src={navImg}
                            alt=""
                            width="150"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            {
                                user.email ?
                                    <Link to="" onClick={logOut} href="">SignOut</Link>
                                    :
                                    <Link to="/login">LogIn</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;