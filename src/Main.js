import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from './HornedBeast';
// import unicorn from './unicorn.jfif';
// import rhino from './rhino.jfif';

class Main extends React.Component {
  render() {
    return (
      <Container className='main'>
        <Row>
          {this.props.beastObj.map(obj => (
            <Col sm={6} md={3} key={obj.title}>
              <HornedBeast title={obj.title} description={obj.description} src={obj.image_url} alt={obj.description} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
