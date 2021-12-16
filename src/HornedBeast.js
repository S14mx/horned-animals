import React from 'react';
import Image from 'react-bootstrap/Image';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Image fluid src={this.props.src} alt={this.props.description} title={this.props.title} onClick={this.handleClick} />
        <p>{this.props.description}</p>
        <h3><span>{'\u{2764}'}</span> {this.state.likes}</h3>
      </div>
    );
  }
}

export default HornedBeast;
