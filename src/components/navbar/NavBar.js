import React from 'react';
import { CartWidget } from '../cartwidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

export const navbar = () => {
    return (
    <>
        <Navbar bg="dark padding" variant="dark">
            <Navbar.Brand href="#home">Tienda-FT</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <CartWidget totalProducts={6}/>
        </Navbar>
    </>
    );
}