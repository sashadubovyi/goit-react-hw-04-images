import { useEffect } from 'react';
import { Backdrop, LargeImage } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, modalData }) => {
  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  const handleCloseByEsc = e => {
    if (e.code !== 'Escape') return;
    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);
  });

  useEffect(() => {
    window.removeEventListener('keydown', handleCloseByEsc);
  });

  const { url, alt } = modalData;

  return (
    <Backdrop onClick={handleBackdropClick}>
      <LargeImage src={url} alt={alt} target="_blank" rel="noreferrer" />
    </Backdrop>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Modal;
