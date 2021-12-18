import React from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
import SortButtons from './SortButtons';
import { sortAsc, sortDesc } from './utils';
// import unicorn from './unicorn.jfif';
// import rhino from './rhino.jfif';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: {},
      data: objectData,
    };
  }

  handleLike = (title) => {
    if (title in this.state.likes) {
      this.setState({
        likes: { ...this.state.likes, [title]: this.state.likes[title] + 1 },
      });
    } else {
      this.setState({ likes: { ...this.state.likes, [title]: 1 } });
    }
  };

  getLikesCount = (title) =>
    title in this.state.likes ? this.state.likes[title] : 0;

  sortByLikesCount = (direction) => {
    const asc = direction === 'asc';
    const sortedData = this.state.data.sort((a, b) =>
      asc
        ? sortAsc(this.getLikesCount(a.title), this.getLikesCount(b.title))
        : sortDesc(this.getLikesCount(a.title), this.getLikesCount(b.title))
    );

    this.setState({ data: sortedData });
  };

  render() {
    return (
      <Container className="main">
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
        </Row>
      </Container>
    );
  }
}

export default Main;
