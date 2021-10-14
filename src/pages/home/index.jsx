import React from 'react'
import styled from 'styled-components'

//components
import Header from "./header" 

const Home = () => {
  return (
    <HomeDiv>
      {/* Hello */}
      <Header />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: 100%;
`

export default Home;