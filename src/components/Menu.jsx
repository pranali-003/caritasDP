import React, { useState } from 'react';
import CustomModal from './CustomModal';

import EditProfile from './EditProfile';
import EditRequirements from './EditRequirements';
import Achievements from './Achievements';
import Photos from './Photos';
import Receipts from './Receipts';
import FindVolunteers from './FindVolunteers';
import ManageForum from './ManageForum';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false); // Controls modal visibility
    const [modalContent, setModalContent] = useState(null); // Stores the component to render in the modal
    const [modalTitle, setModalTitle] = useState(''); // Title for the modal

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle opening the modal with dynamic content
    const handleOpenModal = (Component, title) => {
        setModalContent(<Component />); // Dynamically set the component
        setModalTitle(title); // Set the title
        setModalShow(true); // Show the modal
    };

    const handleCloseModal = () => {
        setModalShow(false); // Close the modal
    };

    return (
        <>
            <button
                className="position-fixed top-0 start-0 m-3 border-0 bg-transparent"
                onClick={toggleMenu}
            >
                <span className="fa-solid fa-bars bg-white"></span>
            </button>

            <div
                className={`bg-light position-fixed top-0 h-100 shadow ${isMenuOpen ? '' : 'd-none'}`}
                style={{
                    width: '280px',
                    left: isMenuOpen ? '0' : '-280px', 
                    transition: 'left 0.3s ease',
                    zIndex: 1000,
                }}
            >
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h4 className="m-0">MENU</h4>
                    <button
                        className="border-0 bg-transparent text-decoration-none"
                        onClick={toggleMenu}
                    >
                        ✕
                    </button>
                </div>

                <ul className="list-group list-group-flush">
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(EditProfile, 'Edit Profile')}
                    >
                        Edit Profile
                    </li>
                    <li
                        className="list-group-item p-3 m-1" 
                        onClick={() => handleOpenModal(EditRequirements, 'Edit Requirements')}
                    >
                        Edit Requirements
                    </li>
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(Achievements, 'Achievements')}
                    >
                        Achievements
                    </li>
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(Photos, 'Photos')}
                    >
                        Photos
                    </li>
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(Receipts, 'Receipts')}
                    >
                        Receipts
                    </li>
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(FindVolunteers, 'Find Volunteers')}
                    >
                        Find Volunteers
                    </li>
                    <li
                        className="list-group-item p-3 m-1"
                        onClick={() => handleOpenModal(ManageForum, 'Manage Forum')}
                    >
                        Manage Forum
                    </li>
                </ul>
            </div>

            {/* Modal Component */}
            <CustomModal
                show={modalShow}
                handleClose={handleCloseModal}
                title={modalTitle}
                content={modalContent}
            />

            {isMenuOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 500,
                    }}
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
};

export default Menu;
