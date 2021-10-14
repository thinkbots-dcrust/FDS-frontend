import React from 'react';
import styled from 'styled-components'
import user from "../../assets/user.svg"
import cart from "../../assets/cart.svg"

function Header(props) {
  return (
    <Cont>
      <NameBox>
        FDS,DCRUST
      </NameBox>
      <ImageBox>
        <Image src = {cart} alt = "" />
        <Image src = {user} alt = "" />
      </ImageBox>
    </Cont>
  );
}

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

  @media(max-width: 720px){
    width: 25%;
  }
`


const Cont = styled.div`
  width :  100%;
  min-width: 300px;
  padding : 10px 0;
  border: solid black; 
  display: flex;
  justify-content: space-between;
`

const NameBox = styled.div`
  width: 9%;
  text-align: center;
  font-size: 2rem;
  
  @media (max-width : 720px){
    font-size: 1.3rem
  }
`

export default Header;