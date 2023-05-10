import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../state/cartSlice';
import Navbars from './Navbars';
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
color:white;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transition: all 0.5s ease;
cursor: pointer;

`;
const ContainerParent = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    box-shadow: 5px 5px 5px #ccc;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    
    }
  `;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position: absolute;
`;

const Image = styled.img`
height: 70%;
width: 70%;
z-index: 2;
`;

const Icon = styled.div`
margin-top: 10px;
transition: all 0.5s ease;
&:hover {
  transform: scale(1.1);
}
`
const Title=styled.h5`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
transition: all 0.5s ease;
text-align: center;
&:hover {
  
  transform: scale(1.1);
}
`
const Price=styled.span`
width: 100%;

display: flex;
align-items: flex-start;
justify-content: center;

transition: all 0.5s ease;
&:hover {
transform: scale(1.1);
}
`
const Bottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  margin-top: 10px;
  background-color: ${(props) =>
    props.type === "filled" ? "transparent" : "black"};
  color: white;
`;
const CategoriesItem = () => {
const [cat,setCat]=useState([])
  const param = useParams();
const dispatch=useDispatch()
  const getCategory = async () => {
    fetch(`https://fakestoreapi.com/products/category/${param.item}`)
    .then(res=>res.json())
    .then(json=>setCat(json))
}
useEffect(() => {
  getCategory();
}, [])
  
  return (
    <> 
    <Navbars/>
    <h1 className='text-center mt-3'>Category {param.item}</h1>
    <ContainerParent>
{cat.map((item)=>(
  <>
  <Container key={item.id}>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Title>Title: {item.title}</Title>
        <Price>Price:{item.price} $</Price>
        <Icon>
        <Button variant="contained"onClick={() => dispatch(addtoCart(item))}>Add to Cart</Button>  
        </Icon>    
      </Info>
      
    </Container>
   
    </>
))}
 <Link to={'/ecommerce'}>
        <Bottom >Back to SHOPPING</Bottom>
      </Link>
    </ContainerParent>
    </>
  )
}

export default CategoriesItem