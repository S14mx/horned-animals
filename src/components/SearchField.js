import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

class SearchField extends Component {
  render() {
    return (
      <InputGroup style={inputGroupStyles}>
        <FormControl
          placeholder="Search by title or description"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </InputGroup>
    );
  }
}

const inputGroupStyles = {
  maxWidth: 400,
  marginRight: '2em',
};

export default SearchField;
