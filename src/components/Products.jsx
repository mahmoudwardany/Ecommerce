import styled from "styled-components";
import Product from "./Product";
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { productFetch } from "../state/productSlice";
import Categories from "./Categories";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;
const Products = () => {
  const { products, Loading } = useSelector((state) => state.products)

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(productFetch())
  }, [dispatch])

  return (
    <>
    <Categories/>
    <Container>
    {Loading &&<p className="fs-1 d-flex text-center justify-content-center align-items-center">Loading....</p>}
            
                {products.map((item)=>(
                  <Product key={item.id} item={item}/>
                ))}
            
    </Container></>
  );
};

export default  Products;