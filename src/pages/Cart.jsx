import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbars from "../components/Navbars";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import SummaryComp from '../components/SummaryComp';
import { Link } from 'react-router-dom';
import { addtoCart, ClearCart, descressQuantity, removeFromCart } from '../state/cartSlice';
import { Button } from 'react-bootstrap';

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 10px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "flex",flexDirection: "column",margin:"10px",width:"100%" })}
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;

`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  
`;
const ProductName = styled.span``;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = () => {
const cart=useSelector(state => state.cart.cartitem)
const dispatch=useDispatch()
const totalPrice=cart.reduce((acc,product)=>{
  acc +=product.price * product.cartQuantity
return acc
},0)
const handleDescred=(product)=>{
dispatch(descressQuantity(product))
}
  return (
    <Container>

      <Announcement/>
      <Navbars />
      <Wrapper>
        <Title>YOUR BAG</Title>
    
        <Top>
          <TopButton>
            <Link to='/ecommerce' className='nav-link'>CONTINUE SHOPPING</Link>
          </TopButton>
          <TopTexts>
          
            <Button
          variant='warning'
          onClick={()=> dispatch(ClearCart())}
  className='mx-sm-auto mx-md-auto mb-3 text-center '>
    Clear All Products
    </Button>
          </TopTexts>
        <Link to='/checkout' className='nav-link'>  
        <TopButton type="filled">
            CHECKOUT NOW
            </TopButton>
            </Link> 
        </Top>
        <Bottom>
          <Info>
          {cart.length > 0 ?  cart.map((product)=>(
            <>
            <Product>
<ProductDetail>
  <Image src={product.image} />
  <Details >
    <ProductId> 
      <b className='col-sm-12'>ID:</b> {Date.now()}
    </ProductId>
    <ProductName>
      <b className='col-sm-12'>Product:</b> {product.title}
    </ProductName>
    <h6 className='col-sm-12'><b>Category:</b>{product.category}</h6>
    <h6 className='col-sm-12'><b>Rating:</b>{product.rating.rate}</h6>
  </Details>
</ProductDetail>
<PriceDetail>
  <ProductAmountContainer>
    <AddIcon onClick={()=> dispatch(addtoCart(product))}/>
    <ProductAmount>Qauntity: {product.cartQuantity}</ProductAmount>
    <RemoveIcon onClick={()=> handleDescred(product)}/>
  </ProductAmountContainer>
  <ProductPrice>$ {product.price * product.cartQuantity}</ProductPrice>
  <Button className='mb-2' variant='danger' onClick={()=>dispatch(removeFromCart(product))}>Remove From Cart</Button>
</PriceDetail>
<SummaryComp  product={product} totalPrice={totalPrice}/> 
</Product>
<Hr/>
</>
)):(
  <p className='text-center fs-1'>No Product here Please added one and check again</p>
)}   
          </Info>
          
        </Bottom>
        <h5 className='text-end'>total Price: {totalPrice}</h5>
      </Wrapper>
    </Container>
  );
};

export default Cart;