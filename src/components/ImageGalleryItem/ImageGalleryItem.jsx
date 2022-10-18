import { Item, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';
import { Component } from 'react';

export class GalleryItems extends Component {
  state = {
    modal: false,
  };

  modalToggle = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };

  render() {
    const { previewURL, modalUrl } = this.props;
    const { modal } = this.state;
    return (
      <>
        <Item>
          <Img
            src={previewURL}
            alt="Searched photo"
            onClick={this.modalToggle}
          />
        </Item>
        {modal && (
          <Modal onClose={this.modalToggle}>
            <img src={modalUrl} alt="Modal new Photo" />
          </Modal>
        )}
      </>
    );
  }
}
