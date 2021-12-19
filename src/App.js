import React from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedIndex: 0
    };

  }

  hideModal = () => {
    this.setState({ show: false });
  }

  showModal = (beastIdx) => {
    console.log('before', this.state.show, this.state.selectedIndex);
    this.setState({ show: true, selectedIndex: beastIdx }, () => console.log('after', this.state.show, this.state.selectedIndex)); // access newly set state(real time state)
  }

  render() {
    return (
      <Container fluid className="App">
        <Header title='Horned Animals' />
        <Main objData={objectData} showModal={this.showModal} />
        <Footer title='Author: Sergii Otryshko' />
        <SelectedBeast objData={objectData[this.state.selectedIndex]} show={this.state.show} hide={this.hideModal} />
      </Container>
    );
  }
}

export default App;
