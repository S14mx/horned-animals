import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';


class Main extends React.Component {

  render() {
    return (
      <Container className='main'>
        <Row className='g-4' sm={2} md={3} lg={4}>
          {this.props.objData.map(({ title, description, image_url }, idx) => (
            <HornedBeast title={title} key={title} description={description} src={image_url} alt={description} showModal={this.props.showModal} beastIdx={idx}/>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
