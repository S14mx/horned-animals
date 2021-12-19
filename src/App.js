import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <Container fluid className="App">
        <Header title="Horned Animals" />
        <Main />
        <Footer title="Author: Sergii Otryshko" />
      </Container>
    );
  }
}

export default App;
