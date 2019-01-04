import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Card, Button } from './elements';

const theme = {
  colors: {
    primary: '#e54b4b',
    secondary: '#dbde61'
  }
};

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82d8d8'
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main
            css={`
              background: red;
              h2 {
                font-size: 3rem;
              }
            `}
          >
            <Button>Hello</Button>
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button>Say Hello</Card.Button>
                <Card.Button modifiers="cancel">Say GoodBye</Card.Button>
              </Card>
            </ThemeProvider>
            {/* <Button>Say Hello</Button>
          <Button modifiers="small">Say Hello</Button>
          <Button modifiers={["small", "cancel"]}>Bye Bye</Button> */}
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;


// const Fake = styled.main`
//   background: red;
//   h2 {
//     font-size: 3rem;
//   }
// `;