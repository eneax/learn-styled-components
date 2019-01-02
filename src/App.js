import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
`;

const color = "white";

const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: indigo;
  /* if props.type === 'cancel', then set the background to tomato */
  /* ${props => props.type === 'cancel' && 'background: tomato;'} */
  /* background: ${props => (props.type === 'cancel' ? 'tomato' : 'indigo')}; */
  /* background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')}; */
`;

// extend Button and create a new one of different color
const CancelButton = styled(Button)`
  background: tomato;
`;

const AppWrapper = styled.div`
  text-align: center;

  header {
    background: teal;
    &:hover {
      color: gold;
    }
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
          <CancelButton>Cancel</CancelButton>
          
          <Heading>Heading Two</Heading>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppWrapper>
    );
  }
}

export default App;
