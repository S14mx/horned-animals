import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { SortDirection } from '../utils/sortUtils';

class SortButtons extends Component {
  render() {
    const { sortByLikesCount } = this.props;

    return (
      <ButtonGroup>
        <Button
          variant="outline-secondary"
          onClick={() => sortByLikesCount(SortDirection.Ascending)}
        >
          Sort Asc
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => sortByLikesCount(SortDirection.Descending)}
        >
          Sort Desc
        </Button>
      </ButtonGroup>
    );
  }
}

export default SortButtons;
