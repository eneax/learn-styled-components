import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
  </header>
);


// styles
export default styled(Header)`
  background: ${purple};
  ${elevation[2]}; /* pick the third item in the array */
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;
