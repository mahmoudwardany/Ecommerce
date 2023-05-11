import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
const ContainerParent = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  position: sticky;
  top: 0;
  margin-bottom: 50px;
  z-index: 3;
  box-shadow: 5px 5px 5px #ccc;
`;
const Links=styled.h3`
  letter-spacing: 10px;
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bolder;
  text-shadow: 5px 5px 5px #ccc;
  ${mobile({fontSize: "1rem",letterSpacing:"7px",fontWeight: "bolder"})}
`
const NavbarAuth = () => {
    
  return (
    <ContainerParent>
    <Navbar collapseOnSelect bg="light"  expand="lg">
    <Container>
      <Link className='nav-link' to="/ecommerce">
        <Links>ONLINESHOPPING</Links>
      </Link>    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
                <Link to="/register" className='nav-link'>SIGN UP</Link>
                <Link to="/login" className='nav-link'>LOGIN</Link>
                </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </ContainerParent>
)
}

export default NavbarAuth