import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class InputField extends React.Component {
  getUniqueOptions = () => {
    const uniqueHornValues = [];
    this.props.objectData.forEach(({ horns }) => {
      if (!uniqueHornValues.includes(horns)) {
        uniqueHornValues.push(horns);
      }
    });

    return (
      <>
        <option key='all' value='all'>All</option>
        {uniqueHornValues.sort((a, b) => a - b)
          .map(element => <option key={element} value={element}>{`${element} ${element === 1 ? 'horn' : 'horns'}`}</option>)}
      </>
    );
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Filter by number of horns</Form.Label>
          <Form.Select onChange={this.props.filterBeasts}>
            {this.getUniqueOptions()}
          </Form.Select>
        </Form>
      </Container>
    );
  }
}

export default InputField;
