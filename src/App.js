import React from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import InputField from './InputField.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedIndex: 0,
      filteredObjs: objectData
    };
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  showModal = (beastIdx) => {
    console.log('before', this.state.show, this.state.selectedIndex);
    this.setState({ show: true, selectedIndex: beastIdx }, () => console.log('after', this.state.show, this.state.selectedIndex)); // access newly set state(real time state)
  }

  filterBeasts = (event) => {
    const selection = parseInt(event.target.value);
    let filteredObjs;
    if (selection) {
      filteredObjs = objectData.filter(obj => obj.horns === selection);
      this.setState({ filteredObjs: filteredObjs });
    } else {
      this.setState({ filteredObjs: objectData });
    }
  }

  render() {
    return (
      <Container fluid className="App">
        <Header title='Horned Animals' />
        <InputField objectData={objectData} filterBeasts={this.filterBeasts}/>
        <Main objData={this.state.filteredObjs} showModal={this.showModal} />
        <Footer title='Author: Sergii Otryshko' />
        <SelectedBeast objData={objectData[this.state.selectedIndex]} show={this.state.show} hide={this.hideModal} />
      </Container>
    );
  }
}

export default App;
