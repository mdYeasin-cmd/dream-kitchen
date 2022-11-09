import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './../../../assets/Logo/logo.png';
import Button from 'react-bootstrap/Button';

const Header = () => {

    const navbarStatus = () => {
        return ({ isActive }) =>
            isActive ?
                'nav-link mx-2 active-nav fw-semibold rounded' :
                'nav-link mx-2 fw-semibold';
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
                    <Nav className="ms-auto align-items-center">
                        <NavLink to="/" className={navbarStatus()}>Home</NavLink>
                        <NavLink to="/services" className={navbarStatus()}>All Foods</NavLink>
                        <NavLink to="/addNewFood" className={navbarStatus()}>Add Service</NavLink>
                        <NavLink to="/blog" className={navbarStatus()}>Blog</NavLink>
                        <NavLink to="/login" className="ms-2">
                            <Button className="w-100 fw-semibold" variant="primary">Log In</Button>
                        </NavLink>
                        <NavLink to="/registration" className="ms-2">
                            <Button className="w-100 fw-semibold" variant="primary">Registration</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;