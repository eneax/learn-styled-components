import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, CancelButton } from './elements';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button>Say Hello</Button>
        <CancelButton>Say GoodBye</CancelButton>
        <Button size="small">Say Hello</Button>
        <CancelButton size="small">Say GoodBye</CancelButton>

        <Button size="small" type="cancel">Bye Bye</Button>
      </div>
    );
  }
}

export default App;
