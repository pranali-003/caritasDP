import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, title, content }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <div className="ms-auto">
          <Button variant="primary" className="me-2" onClick={() => alert('Saved!')}>
            Save
          </Button>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
