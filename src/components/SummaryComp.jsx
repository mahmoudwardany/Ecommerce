import React from 'react'
import styled from 'styled-components';

const Summary = styled.div`
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryComp = ({product}) => {
  return (
    <>
     
        <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Price</SummaryItemText>
              <SummaryItemPrice>${product.price}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Qauntity</SummaryItemText>
              <SummaryItemPrice>{product.cartQuantity }</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {product.price * product.cartQuantity  }</SummaryItemPrice>
            </SummaryItem>
        </Summary>
  
    </>
  )
}





export default SummaryComp