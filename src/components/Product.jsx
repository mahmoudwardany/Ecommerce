import { addtoCart } from '../state/cartSlice';
  import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useAuth } from '../context/context';


  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.5s ease;
    cursor: pointer;
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
    color:#fff;
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
    color:#fff;
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
const Btn= styled.button`
   border: none;
    background-color: green;
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
   `
  const Product = ({ item}) => {
    const {currentUser}=useAuth()

  const dispatch=useDispatch()
    return (
      <>
          
      <Container>
        <Circle />
        <Image src={item.image} />
        <Info>
          <Title>Title: {item.title}</Title>
          <Price>Price:{item.price} $</Price>
          <Icon>
          <Btn disabled={!currentUser} onClick={() => dispatch(addtoCart(item))}>Add to Cart</Btn>  
          </Icon>    
        </Info>
      </Container>
      </>
    );
  };
  
  export default Product;
