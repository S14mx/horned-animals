import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.objData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={this.props.objData.image_url} alt={this.props.objData.description} fluid/>
            <p>{this.props.objData.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
