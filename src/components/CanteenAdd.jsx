import React from 'react';
import styled from 'styled-components';

//media queries for mobile view
import {media} from "../helpers"

//images
import canteen from "../assets/canteen.svg"

//style colors
import {baseStyles} from "../styles/base"

const CanteenAdd = () => {
  return (
    <AddCont>
      <CantImg src={canteen} alt =" " />
      <Details>
        <Heading><b>Pizza Book</b></Heading>
        <LightText>Avg. Time per Order</LightText>
        <LightText>ratings</LightText>
        <LightText><b>20% off on order above 300</b></LightText>
      </Details>
    </AddCont>
  )
}

//styled components
const AddCont = styled.div`
  ${media.mobile`
    // border: solid black;  
    display:flex;
    // height: 100px;
    min-width: 260px;
  `}
`

const CantImg = styled.img`
  height: 80px;
  // width:50%
  box-shadow: ${baseStyles.boxShadow.main}
`

const Details = styled.div`
  display-flex: flex;
  flex-direction: column;
  margin-left: 10px;
`

const LightText = styled.div`
  font-color: ${baseStyles.borderColor};
  font-size: 0.8rem;
  margin-top: 3px;
`
const Heading = styled.div`
  font-size: 1.2rem;
  font-weight; 600
`
export default CanteenAdd;
