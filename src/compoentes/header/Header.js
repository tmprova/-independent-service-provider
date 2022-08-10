
import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import CustomLink from "../../customlink/CustomLink";
import auth from "../../firebase/firebase.init";

const Header = () => {

  const [user] = useAuthState(auth);

  const handleLogOut = () =>{
      signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="sticky-top"
      >
        <Container >
          <Navbar.Brand
            className="text-info font-weight-bold"
            as={Link}
            to="/about-us"
          >
            Lawyer's petition
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={CustomLink} to="signup">
                Signup
              </Nav.Link>        
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/">
                Home
              </Nav.Link> 
            {/* <Nav.Link as={Link} to="checkout">
                Checkout
              </Nav.Link> */}
              {
                user? 
                <Nav.Link as={Link} onClick={handleLogOut} to='/'>Log out</Nav.Link>
                :<Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              }
              <Nav.Link as={Link} to="/blogs">
                Blogs(Q&A)
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
