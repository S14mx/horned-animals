import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class InputField extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Filter by number of horns</Form.Label>
          <Form.Select onChange={this.props.filterBeasts}>
            <option value='All'>All</option>
            <option value='1'>1 horn</option>
            <option value='2'>2 horns</option>
            <option value='3'>3 horns</option>
            <option value='100'>100 horns</option>
          </Form.Select>
        </Form>
      </Container>
    );
  }
}

export default InputField;
