import React from 'react';
import { Container,Nav, Navbar, NavLink } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
<Navbar bg="light" variant="light">
        <Container className='text-info font-weight-bold '>
          <Navbar.Brand as={Link} to='/about-us'>Lawyer's petition</Navbar.Brand>
          <Nav className=" d-flex justify-content-end">
            
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs(Q&A)</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
    );
};

export default Header;