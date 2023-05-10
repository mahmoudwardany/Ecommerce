import styled from "styled-components";
import {mobile} from "../responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../context/context";
import { Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import NavbarAuth from "../components/NavbarAuth";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 20px;
  background: linear-gradient(to left, #2f3130,#3b2020,#511313);
  color: white;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 10%;
  border: none;
  padding: 5px ;
  background: linear-gradient(to right, #2f3130,#3b2020,#d71d1d);
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "40%" })}

`;

const Links = styled.span`
    margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #fffbfb;
`;

const Login = () => {
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
const {login}=useAuth()
const navigate=useNavigate()
const emailRef=useRef()
const passwordRef=useRef()
const location=useLocation()
const redirectPath=location.state?.path || '/ecommerce'
const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    setError('')
    setLoading(true)
    await login(emailRef.current.value,passwordRef.current.value)
    navigate(redirectPath,{replace:true})
    toast.info(`You LoggedIn  Successfully`, {
      position: "top-right"})
  } catch (error) {
    setError('Failed to Login')
  }
  setLoading(false)
}
  return (
    <>
    <NavbarAuth/>
    <Container>
      
    <Wrapper>  
    
        <Title>SIGN IN</Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Input type='email' placeholder="email"
          ref={emailRef}
          />
          <Input type='password' placeholder="password" 
              ref={passwordRef}
          />
          <Button disabled={loading}>LOGIN</Button>
          <Link to='/register' className="nav-link">
          <Links>CREATE A NEW ACCOUNT</Links> 
            </Link>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;