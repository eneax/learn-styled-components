import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
    Hello
  </header>
);


// styles
export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  width: 100%;
  ${serif};
  ${fixed()};
  ${elevation[2]}; /* pick the third item in the array */

  .logo {
    width: 60px;
  }
`;
