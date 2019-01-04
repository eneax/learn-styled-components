import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button } from './elements';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button>Say Hello</Button>
        <Button modifiers="small">Say Hello</Button>
        <Button modifiers={["small", "cancel"]}>Bye Bye</Button>
      </div>
    );
  }
}

export default App;
