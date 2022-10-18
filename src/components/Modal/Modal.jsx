import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  useEffect(() => {
    const closeOverlay = e => {
      if (e.target.nodeName !== 'IMG') {
        onClose();
      }
    };
    const closeEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeEsc);
    document.addEventListener('click', closeOverlay);

    return () => {
      document.removeEventListener('keydown', closeEsc);
      document.removeEventListener('click', closeOverlay);
    };
  }, [onClose]);

  return createPortal(
    <Overlay>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>,
    modalRoot
  );
}
