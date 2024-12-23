import React, { useState } from 'react';
import CustomModal from './CustomModal';

const MainComponent = () => {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const items = [
    'Item 1 details',
    'Item 2 details',
    'Item 3 details'
  ];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {`Item ${index + 1}`}
          </li>
        ))}
      </ul>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        content={modalContent}
      />
    </div>
  );
};

export default MainComponent;
