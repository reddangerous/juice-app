import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LOGO from '../assets/LOGO.png';
const Header = () => {
    return (
        <Navbar className="transparent"  expand="lg" fixed="top" style={{ color: '#473525',  marginRight: '80px', marginLeft: '80px'
            
        }}>
            {/* Logo (replace with your actual logo) */}
            <Navbar.Brand>
                <img src={LOGO} alt="Logo" style={{ width: '70px', height: '70px' }} />
            </Navbar.Brand>

            {/* Centered navigation links */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/" style={{ color: '#473525' }}>Home</Nav.Link>
                    <Nav.Link href="/features" style={{ color: '#473525' }}>Features</Nav.Link>
                    <Nav.Link href="/menu" style={{ color: '#473525' }}>Menu</Nav.Link>
                    <Nav.Link href="/pricing" style={{ color: '#473525' }}>Pricing</Nav.Link>
                    <Nav.Link href="/contact" style={{ color: '#473525' }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            {/* Signup button on the far right */}
            <Nav className="ml-auto">
                <Nav.Link href="/signup" style={{ border: '1px solid #473525', borderRadius: '10px' }}>Sign Up</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
