import React, { Component } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import objectData from '../data.json';
import {
  emulateAsyncFetch,
  filterData,
  getFromStorageAsync,
  populateId,
  setToStorage,
} from '../utils/dataUtils';
import { sortAsc, sortDesc, SortDirection } from '../utils/sortUtils';
import CustomModal from './CustomModal';
import HornedBeast from './HornedBeast';
import TopPanel from './TopPanel';

const LIKES_STORAGE_KEY = 'likes';
const FILTER_BY_FIELDS = ['title', 'description', 'keyword', 'id'];
class Main extends Component {
  constructor() {
    super();

    this.state = {
      likes: {},
      data: [],
      loading: true,
      showModal: false,
      selectedId: null,
      filterSelection: '',
    };
  }

  loadData = () => {
    if (this.state.loading) {
      emulateAsyncFetch(objectData, 1000).then((data) =>
        this.setState({ data: populateId(data), loading: false })
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

  handleOnFilter = (filterSelection) => {
    this.setState({ filterSelection: filterSelection });
  };

  handleOpenModal = (id) => {
    this.setState({
      showModal: true,
      selectedId: id,
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

  generateCustomModalProps = () => ({
    handleLike: this.handleLike,
    handleDislike: this.handleDislike,
    show: this.state.showModal,
    onHide: this.handleCloseModal,
    element:
      this.state.data.filter(({ id }) => id === this.state.selectedId)[0] ?? {},
    getLikesCount: this.getLikesCount,
  });

  componentDidMount() {
    this.loadData();
    this.setInitialLikes();
  }

  render() {
    const { loading, data, filterSelection } = this.state;

    return (
      <Container className="main" style={containerStyles}>
        {loading && <Spinner animation="border" />}

        {data.length > 0 && (
          <>
            <CustomModal {...this.generateCustomModalProps()} />
            <TopPanel
              sortByLikesCount={this.sortByLikesCount}
              handleOnFilter={this.handleOnFilter}
              filterByFields={FILTER_BY_FIELDS}
            />
            <Row className="g-4" sm={2} md={3} lg={4}>
              {filterData(data, filterSelection, FILTER_BY_FIELDS).map(
                (element) => (
                  <HornedBeast
                    key={element.id}
                    handleOpenModal={this.handleOpenModal}
                    getLikesCount={this.getLikesCount}
                    element={element}
                  />
                )
              )}
            </Row>{' '}
          </>
        )}
      </Container>
    );
  }
}

const containerStyles = {
  minHeight: '85vh',
};

export default Main;
