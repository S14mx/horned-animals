import React from 'react';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    this.setState({ likes: this.state.likes + 1 });
    this.props.showModal(this.props.beastIdx);
  }

  render() {
    return (
      <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.src} alt={this.props.description} title={this.props.title} onClick={this.handleClick} />
          <Card.Text>{this.props.description}</Card.Text>
        </div>
        <Card.Text><span>{'\u{2764}'}</span> {this.state.likes}</Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;
