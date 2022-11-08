import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './../../../assets/Logo/logo.png';

const Header = () => {

    const navbarStatus = () => {
        return ({ isActive }) =>
            isActive ?
                'nav-link active-nav fw-semibold rounded' :
                'nav-link fw-semibold';
    }

    return (
        <Navbar className="py-3" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo-img me-2" src={logo} alt="" />
                    <span className="fw-semibold">Dream Kitchen</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className={navbarStatus()}>Home</NavLink>
                        <NavLink to="/addNewFood" className={navbarStatus()}>Add Service</NavLink>
                        <NavLink to="/blog" className={navbarStatus()}>Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;