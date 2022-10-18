import { Item, Card } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export function GalleryItems({ previewURL, modalUrl }) {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(prevModal => !prevModal);
  };

  return (
    <>
      <Item>
        <Card src={previewURL} alt="Searched photo" onClick={modalToggle} />
      </Item>
      {modal && (
        <Modal onClose={modalToggle}>
          <img src={modalUrl} alt="Modal large" />
        </Modal>
      )}
    </>
  );
}
