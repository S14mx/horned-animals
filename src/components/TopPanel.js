import React, { Component } from 'react';
import SortButtons from './SortButtons';
import SearchField from './SearchField';

export default class TopPanel extends Component {
  render() {
    return (
      <div style={containerStyles}>
        <SearchField />
        <SortButtons sortByLikesCount={this.props.sortByLikesCount} />
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
