import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

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
