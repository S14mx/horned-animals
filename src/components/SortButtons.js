import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { SortDirection } from '../utils/sortUtils';

class SortButtons extends Component {
  render() {
    const { sortByLikesCount } = this.props;

    return (
      <div className="my-4">
        <Button
          className="mx-2"
          variant="outline-dark"
          onClick={() => sortByLikesCount(SortDirection.Ascending)}
        >
          Sort Asc
        </Button>
        <Button
          className="mx-2"
          variant="outline-dark"
          onClick={() => sortByLikesCount(SortDirection.Descending)}
        >
          Sort Desc
        </Button>
      </div>
    );
  }
}

export default SortButtons;
