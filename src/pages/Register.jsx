import { useRef, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth } from "../context/context";
import { toast } from "react-toastify";


import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarAuth from "../components/NavbarAuth";
const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: white;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
 
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 20px;
  background: linear-gradient(to left, #000000,#4f2323,#550101);
  color: white;
  ${mobile({ width: "90%" })}
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
  width: 10%;
  border: none;
  padding: 5px ;
  background-color: #fbffff;
  color: #080808;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "40%" })}

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
  setError('Password must be more than 8 character')
}
setLoading(false)
}

  return (
    <>
    <NavbarAuth/>
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