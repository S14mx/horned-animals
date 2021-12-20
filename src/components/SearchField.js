import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: '' };
  }

  onSearchFieldChange = (value) => {
    this.setState({ searchValue: value }, () =>
      this.props.handleOnFilter(this.state.searchValue)
    );
  };

  render() {
    return (
      <InputGroup style={inputGroupStyles}>
        <FormControl
          placeholder={`Search by ${this.props.filterByFields.join(', ')}`}
          value={this.state.searchValue}
          aria-label="Search"
          onChange={(event) => this.onSearchFieldChange(event.target.value)}
        />
        <Button
          variant="outline-secondary"
          onClick={() => this.onSearchFieldChange('')}
        >
          X
        </Button>
      </InputGroup>
    );
  }
}

const inputGroupStyles = {
  maxWidth: 400,
  marginRight: '2em',
};

export default SearchField;
