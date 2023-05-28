import React from "react";
import "../App.css"
import {Navbar, Nav, Container}  from 'react-bootstrap';
// import  {NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import myLogo from "../assets/images/icons-bridge-80.png";


function NavBar() {
    
    return (
      <div className="App">
        <>
          <Container className="Container2">
             <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            
              <Navbar.Brand as={Link} to="/"><img className="logo" src={myLogo} alt="myLogo..."/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link className="navLink" as={Link} to="/About" ><span>A</span>bout</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Cities"><span>C</span>ities</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Parks"><span>P</span>arks</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Mountains"><span>M</span>ountains</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Beaches"><span>B</span>eaches</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Islands"><span>I</span>slands</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Contact"><span>C</span>ontact</Nav.Link>
                    {/* <NavDropdown className="navLink" title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown> */}
                     
                  </Nav>
              </Navbar.Collapse>  
            
            </Navbar>
          </Container>
        </>
      </div>    
    );
}




export default NavBar;