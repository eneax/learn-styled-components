import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = () => {
  return (
    <AppHeader>
      <img src={logo} alt="logo" className="logo"/>
    </AppHeader>
  )
};


// styles
const AppHeader = styled.header`
  background: #524763;
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;

export default Header;
