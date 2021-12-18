import React from 'react';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

class HornedBeast extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     likes: 0,
  //   };
  // }

  // handleClick = () => {
  //   this.setState({ likes: this.state.likes + 1 });
  // };

  render() {
    const { description, showLikes, handleLike, src, title } = this.props;

    return (
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Img
            src={src}
            alt={description}
            title={title}
            onClick={() => handleLike(title)}
          />
          <Card.Text>{description}</Card.Text>
        </div>
        <Card.Text>
          <span>{'\u{2764}'}</span> {showLikes(title)}
        </Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;
