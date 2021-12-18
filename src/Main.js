import React from 'react';
import objectData from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
// import unicorn from './unicorn.jfif';
// import rhino from './rhino.jfif';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: {},
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

  showLikes = (title) =>
    title in this.state.likes ? this.state.likes[title] : 0;

  render() {
    return (
      <Container className="main">
        <Row className="g-4" sm={2} md={3} lg={4}>
          {objectData.map(({ title, description, image_url }) => (
            <HornedBeast
              handleLike={this.handleLike}
              showLikes={this.showLikes}
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
