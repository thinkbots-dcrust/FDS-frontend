import React from 'react';
import styled from 'styled-components'

//images
import user from "../assets/user.svg"
// import cart from "../assets/cart.svg"

//media queries for mobile view
import {media} from "../helpers"

function Header({...props}) {
  return (
    <Cont {...props}>
      <NameBox>
        Food
        <br />
        <b><big>Delievery</big></b>
        &nbsp;
        Services
      </NameBox>
      <ImageBox>
        {/* <Image src = {cart} alt = "" /> */}
        <Image src = {user} alt = "" />
      </ImageBox>
    </Cont>
  );
}

//styled components
const Image = styled.img`
  height: 30px;
  margin: auto 0;

  @media(max-width: 720px){
    height: 18px;
  }
`

const ImageBox = styled.div`
  width: 13%;
  display: flex;
  justify-content: space-evenly;

`


const Cont = styled.div`
  width :  100%;
  min-width: 300px;
  top: 0;
  // border: solid black;
  display: flex;
  justify-content: space-between;
`

const NameBox = styled.div`
  width: 70%;
  padding: 0 5px;
  font-size: 2rem;
  // border: solid black;

  ${media.mobile`
    font-size: 1rem
  `}
  
`

export default Header;