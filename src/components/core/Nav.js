import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  width: 80%;
  top: 0;
  height: 60px;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  background-color: white;

  @media (max-width: 700px) {
    width: 100%;
   }
`

const FlexNavigation = styled.div`
   width: 20%;
   max-width: 80px;
   display: flex;
   justify-content: space-between;

   @media (max-width: 700px) {
    margin-right:15px;
  }
`
const TitleNavigation = styled.h1`
  @media (max-width: 700px) {
    margin-left:15px;
  }
`

class Nav extends React.Component {
  render() {
    return(
      <Navigation>
        <TitleNavigation>React_interview</TitleNavigation>
        <FlexNavigation>
          <NavLink
            to="/"
          ><i className="far fa-caret-square-right fa-2x"></i></NavLink>

          <NavLink
          to="/like"
          ><i className="far fa-star  fa-2x"></i></NavLink>
        </FlexNavigation>
        
      </Navigation>
    );
  }
}

export default Nav;