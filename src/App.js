import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './Global';
import { Heading, Button, CancelButton } from './elements';


// make Fake aware of the styles that will be applied to it
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

const AppWrapper = styled.div`
  text-align: center;

  header {
    background: teal;
    &:hover {
      color: gold;
    }
  }

  /* select every Button (not CancelButton) component inside of AppWrapper */
  ${Button} {
    margin-bottom: 2rem;
  }
`;


// DoubleFake is a styled version of Fake
const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>

          <Button>Save</Button>
          <CancelButton top="100">Cancel</CancelButton>
          
          <Heading>Heading Two</Heading>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <DoubleFake />
          <Fake />

          <GlobalStyle />
        </header>
      </AppWrapper>
    );
  }
}

export default App;
