import React from 'react'
import styled from 'styled-components'

//images
import search from '../../assets/search.svg'
import pizza from '../../assets/pizza.svg'

//components
import {CanteenAdd,OfferCont} from "../../components" 

//baseColors
import {baseStyles} from "../../styles/base"

const Home = () => {
  return (
    <HomeDiv>
      <SearchBar>
        <img src={search} alt = "" />
        <SearchInput placeholder="Search....">
        </SearchInput>
      </SearchBar>
      <br />
      {/* <img src="https://img.icons8.com/color/48/000000/discount--v3.png"/> */}

      {/* menu Image Container */}
      <h2>Food Items</h2>
      <MenuImages>
        <Image src={pizza} />
        <Image src={pizza} />
        <Image src={pizza} />
      </MenuImages>
      <br />
      
      {/* Canteens */}
      <h2>Canteens In Dcrust</h2>
      <CanteenAdd/>
      <hr/>
      <CanteenAdd/>
      <br />

      {/* Offers */}
      <h2>Offers</h2>
      <Offers>
        <OfferCont/>
        <OfferCont/>
        <OfferCont/>
        <OfferCont/>
        <OfferCont/>
      </Offers>
 
    </HomeDiv>
  )
}

//styled components

const HomeDiv = styled.div`
  width: 100%;
`

const SearchBar = styled.div`
  display: flex;
  // border: solid black;
  width: 90%;
  margin: 0 auto;
`
const SearchInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid ${baseStyles.borderColor};
  margin-left: 10px;
`

const MenuImages = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;  
  height: 100px;
  overflow-y: hidden;
  
`

const Image = styled.img`
  height: 80px;
  padding: 5px;
  margin: 0 5px;
  box-shadow: ${baseStyles.boxShadow.main}
  
`

const Offers = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;  
  height: 150px;
  overflow-y: hidden;

`

export default Home;