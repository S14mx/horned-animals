import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  setSelected = () => {
    this.setState({ selected: true });
  };

  setUnselected = () => {
    this.setState({ selected: false });
  };

  render() {
    const { description, getLikesCount, handleOpenModal, src, title } =
      this.props;

    return (
      <Card
        style={cardStyles}
        onClick={() => handleOpenModal(title)}
        onMouseEnter={this.setSelected}
        onMouseLeave={this.setUnselected}
        border={this.state.selected && 'secondary'}
        bg={this.state.selected && 'light'}
      >
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
  cursor: 'pointer',
};

export default HornedBeast;
