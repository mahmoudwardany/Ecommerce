import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {  Link, useNavigate} from 'react-router-dom'
import { mobile } from "../responsive";
import {  Alert, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../context/context';
import {  useState } from 'react';



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

const Navbars = () => {
  const [error, seterror] = useState('')
  const navigate=useNavigate()
  const {logout,currentUser}=useAuth()
  const cart=useSelector(state =>state.cart.cartitem)
const handleLogOut=async()=>{
  try {
  await  logout()
  navigate('/login')
  } catch (error) {
    seterror('Failed to log out')
  } 
}
  return (
<ContainerParent>
    <Navbar collapseOnSelect bg="light"  expand="lg">
    <Container>
      
      <Link className='nav-link '   to="/ecommerce">
        <Links>ONLINESHOPPING</Links>
      </Link>
    
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        {currentUser?.email ?(
            <>
          <Nav>
              <Link to='/cart' className='nav-link mx-3 '>
              <Badge badgeContent={cart.length === null ? 0: cart.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
    </Link>
    <Button variant='danger' onClick={handleLogOut}>Log out</Button>
    </Nav>
    </>
    ) : (
      <>
      <Nav>
                <Link to="/register" className='nav-link'>
                  <Links>SIGN UP</Links>
                  </Link>
                <Link to="/login" className='nav-link'>
                  <Links>LOGIN</Links>
                  </Link>
                </Nav>
                </>
      )}
        </Nav>
        {error&&<Alert variant='danger' className='mx-3'>{error}</Alert>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </ContainerParent>
  )
}

export default Navbars
