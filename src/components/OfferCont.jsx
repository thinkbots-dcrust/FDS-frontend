import React from 'react';
import styled from "styled-components";

//images
import discount from "../assets/discount.svg"

//styles
import {baseStyles} from "../styles/base"

const OfferCont = () => {
  return (
    <Container>
      <img src = {discount} alt =" " />
      <br />
      <b>Flat $50 off</b>
    </Container>
  )
}

const Container = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;
  box-shadow: ${baseStyles.boxShadow.main}
  flex: 0 0 auto;
  margin-right: 20px;
  
  img{
    padding: 5px 0;
    margin: 0 auto;
    margin-left: auto;
  }

`

export default OfferCont
