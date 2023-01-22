import React, { useEffect } from 'react'
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux'
import {  fetchCategories } from '../state/productSlice';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column",textAlign:'center' })}
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: teal;
    color:white;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ margin:"10px auto",})}
`;
const Categories = () => {

    const { categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(fetchCategories())
      }, [dispatch])
   
    return (
    <>
    <Container className='my-sm-3 mx-auto'>
      {categories.map((item) => (
        <Link to={`category/${item}`} >
        <Button onClick key={item}
        className='my-sm-3 mx-auto'
      >{item}</Button>
        </Link>
      
    ))}
    </Container>
    </>
  )
}

export default Categories