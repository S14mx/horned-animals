import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SortButtons extends Component {
  render() {
    const { sortByLikesCount } = this.props;

    return (
      <div className="my-4">
        <Button
          className="mx-2"
          variant="outline-dark"
          onClick={() => sortByLikesCount('asc')}
        >
          Sort Asc
        </Button>
        <Button
          className="mx-2"
          variant="outline-dark"
          onClick={() => sortByLikesCount('desc')}
        >
          Sort Desc
        </Button>
      </div>
    );
  }
}

export default SortButtons;
