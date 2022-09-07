
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../header/header.css'
import {NavLink} from 'react-router-dom'


 const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/movies/popular">Populer</NavLink></Nav.Link>
            <Nav.Link> <NavLink to="/movies/upcoming">Upcomming</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="/movies/top_rated">Top reted</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="#">Pricing</NavLink></Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;