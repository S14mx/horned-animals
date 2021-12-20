import React, { Component } from 'react';
import SortButtons from './SortButtons';
import SearchField from './SearchField';

export default class TopPanel extends Component {
  render() {
    const { handleOnFilter, sortByLikesCount, filterByFields } = this.props;

    return (
      <div style={containerStyles}>
        <SearchField
          handleOnFilter={handleOnFilter}
          filterByFields={filterByFields}
        />
        <SortButtons sortByLikesCount={sortByLikesCount} />
      </div>
    );
  }
}

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5em',
  marginTop: '1em',
};
