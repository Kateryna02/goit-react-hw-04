




import React from 'react';
import Modal from 'react-modal';
import s from '../Style.module.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const ImageModal = ({ isOpen, closeModal, imageUrl, alt }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Image Modal" style={customStyles} className={s.modal}>
            <img src={imageUrl} alt={alt} />
            <button onClick={closeModal}>Close Modal</button>
        </Modal>
    );
};

export default ImageModal;



