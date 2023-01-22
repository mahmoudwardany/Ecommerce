import { useRef, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth } from "../context/context";
import { toast } from "react-toastify";


import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #1a1919;
  color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: black;
  cursor: pointer;
`;
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Register = () => {
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
const {signup}=useAuth()
const navigate=useNavigate()
const emailRef=useRef()
const passwordRef=useRef()
const passwordConfirmRef=useRef()
async function handleSubmit(e){
e.preventDefault()
try {
  if(passwordRef.current.value !== passwordConfirmRef.current.value){
    return setError('Password do not match')
  }
  setError('')
  setLoading(true)
  await signup(emailRef.current.value,passwordRef.current.value)
  toast.success(`You SignUp  Successfully`, {
    position: "top-right"})
  navigate('/login')
} catch (error) {
  setError('Failed to create an Account')
}
setLoading(false)
}

  return (
    <>
    <Container>
      <Wrapper>        
        <Title>CREATE AN ACCOUNT</Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Input type='email' placeholder="email" 
          ref={emailRef}
          />
          <Input type='password' placeholder="password" 
          ref={passwordRef}
          />
          <Input type='password' placeholder="confirm password"
            ref={passwordConfirmRef}
          />
          <Button disabled={loading} className="mt-3">CREATE</Button>
         
        </Form>
        <Link to='/login' className="nav-link">
          <Links>Already Have  ACCOUNT</Links> 
            </Link>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register;