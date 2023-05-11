import React, { useEffect, useRef } from 'react'
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux'
import {  fetchCategories, searchByName } from '../state/productSlice';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/context';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column",textAlign:'center' })}
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background: linear-gradient(to left, #2f3130,#3b2020,#511313);
    color:white;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ margin:"10px auto",})}
`;
const Categories = () => {

    const { categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch()
  const inputRef=useRef()
  const {currentUser}=useAuth()

    const filterProducts=()=>{
      dispatch(searchByName(inputRef.current.value))
    }
    useEffect(() => {
    dispatch(fetchCategories())
      }, [dispatch])
      
    return (
    <>
    <Container className='my-sm-3 mx-auto'>
      {categories.map((item) => (
        <Link to={`${item}`} key={item} >
        <Button  key={item}
        className='my-sm-3 mx-auto'
      >{item}</Button>
        </Link>
      
    ))}
    </Container>
    {currentUser?.accessToken?(
      
      <div className='text-center mx-auto'>
          <input 
              type={'text'}
              name=''
              className='form-control mx-3 w-75 mt-3'
              placeholder='search by title...'
              ref={inputRef}
              onChange={filterProducts}/>
              </div>
              ):null}
    </>
  )
}

export default Categories