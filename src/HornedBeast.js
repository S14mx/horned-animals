import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {
  render() {
    const { description, getLikesCount, handleOpenModal, src, title } =
      this.props;

    return (
      <Card style={cardStyles} onClick={() => handleOpenModal(title)}>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={src} alt={description} title={title} />
          <Card.Text>{description}</Card.Text>
        </div>
        <Card.Text>
          {'\u{2764}'} {getLikesCount(title)}
        </Card.Text>
      </Card>
    );
  }
}

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default HornedBeast;
