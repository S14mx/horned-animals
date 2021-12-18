import React, { Component } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import objectData from './data.json';
import HornedBeast from './HornedBeast';
import SortButtons from './SortButtons';
import { emulateAsyncFetch } from './utils/dataFetchUtils';
import { sortAsc, sortDesc, SortDirection } from './utils/sortUtils';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      likes: {},
      data: [],
      loading: true,
    };
  }

  loadData = () => {
    if (this.state.loading) {
      emulateAsyncFetch(objectData, 1000).then((data) =>
        this.setState({ data: data, loading: false })
      );
    }
  };

  handleLike = (title) => {
    this.setState({
      likes: {
        ...this.state.likes,
        [title]: (this.state.likes[title] ?? 0) + 1,
      },
    });
  };

  getLikesCount = (title) => this.state.likes[title] ?? 0;

  sortByLikesCount = (direction) => {
    const sortedData = this.state.data.sort((a, b) =>
      direction === SortDirection.Ascending
        ? sortAsc(this.getLikesCount(a.title), this.getLikesCount(b.title))
        : sortDesc(this.getLikesCount(a.title), this.getLikesCount(b.title))
    );

    this.setState({ data: sortedData });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <Container className="main">
        {this.state.loading && <Spinner animation="border" />}

        {this.state.data.length > 0 && (
          <>
            <SortButtons sortByLikesCount={this.sortByLikesCount} />
            <Row className="g-4" sm={2} md={3} lg={4}>
              {this.state.data.map(({ title, description, image_url }) => (
                <HornedBeast
                  handleLike={this.handleLike}
                  getLikesCount={this.getLikesCount}
                  title={title}
                  key={title}
                  description={description}
                  src={image_url}
                  alt={description}
                />
              ))}
            </Row>{' '}
          </>
        )}
      </Container>
    );
  }
}

export default Main;
