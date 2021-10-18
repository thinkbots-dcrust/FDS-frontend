import React from 'react';
import {Route,Switch} from "react-router-dom"
import styled from 'styled-components'

//components
import {Header} from "../components"

//pages
import Home from "../pages/home"

function Routes(props) {
  return (
    <>
    <Header/>
    {/* page container apart from header */}
    <PageCont>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </PageCont>
    </>
  );
}

//styled components

const PageCont = styled.div`
  margin: 20px 10px;
`

export default Routes;