import React, { Component } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import CustomModal from './CustomModal';
import objectData from './data.json';
import HornedBeast from './HornedBeast';
import SortButtons from './SortButtons';
import {
  emulateAsyncFetch,
  getFromStorageAsync,
  setToStorage,
} from './utils/dataUtils';
import { sortAsc, sortDesc, SortDirection } from './utils/sortUtils';

const LIKES_STORAGE_KEY = 'likes';
class Main extends Component {
  constructor() {
    super();

    this.state = {
      likes: {},
      data: [],
      loading: true,
      showModal: false,
      selected: {},
    };
  }

  loadData = () => {
    if (this.state.loading) {
      emulateAsyncFetch(objectData, 1000).then((data) =>
        this.setState({ data: data, loading: false })
      );
    }
  };

  setInitialLikes = () => {
    getFromStorageAsync(LIKES_STORAGE_KEY).then((data) => {
      if (data) {
        this.setState({ likes: data });
      }
    });
  };

  handleLike = (title) => {
    this.setState(
      (state) => ({
        likes: {
          ...state.likes,
          [title]: (state.likes[title] ?? 0) + 1,
        },
      }),
      () => setToStorage(LIKES_STORAGE_KEY, this.state.likes)
    );
  };

  handleDislike = (title) => {
    if (this.state.likes[title] > 0) {
      this.setState(
        (state) => ({
          likes: {
            ...state.likes,
            [title]: (state.likes[title] ?? 0) - 1,
          },
        }),
        () => setToStorage(LIKES_STORAGE_KEY, this.state.likes)
      );
    }
  };

  handleOpenModal = (selectedTitle) => {
    this.setState({
      showModal: true,
      selected: this.state.data.filter(
        ({ title }) => title === selectedTitle
      )[0],
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selected: {} });
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
    this.setInitialLikes();
  }

  render() {
    return (
      <Container className="main">
        {this.state.loading && <Spinner animation="border" />}

        {this.state.data.length > 0 && (
          <>
            <CustomModal
              handleLike={this.handleLike}
              handleDislike={this.handleDislike}
              show={this.state.showModal}
              onHide={this.handleCloseModal}
              element={this.state.selected}
              getLikesCount={this.getLikesCount}
            />
            <SortButtons sortByLikesCount={this.sortByLikesCount} />
            <Row className="g-4" sm={2} md={3} lg={4}>
              {this.state.data.map(({ title, description, image_url }) => (
                <HornedBeast
                  handleOpenModal={this.handleOpenModal}
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
