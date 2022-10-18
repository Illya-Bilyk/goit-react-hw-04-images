import { GalleryItems } from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(({ largeImageURL, id, webformatURL }) => (
        <GalleryItems
          previewURL={largeImageURL}
          modalUrl={webformatURL}
          key={id}
        />
      ))}
    </List>
  );
};
