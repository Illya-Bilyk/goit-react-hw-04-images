import { Searchbar } from './Searchbar';
import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './Button';
import * as API from '../services/api';
import { Loader } from './Loader';

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [quary, setQuary] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);

  const onSubmit = newQuary => {
    setQuary(newQuary);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    const fetch = async () => {
      if (quary === '') return;
      try {
        setIsLoading(true);
        const getImg = await API.getImages(quary, page);
        const newImages = getImg.hits;
        if (newImages.length === 0) {
          alert(
            `Ooops....
  Sorry but we didn't find anything, by your request "${quary}"`
          );
        }
        setImages(prevImages => [...prevImages, ...newImages]);
        setTotal(getImg.total);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [page, quary]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const galleryLength = images.length;
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {images.length !== 0 && <ImageGallery items={images} />}
      {images.length !== 0 && (
        <LoadMore
          onClick={onLoadMore}
          total={total}
          galleryLength={galleryLength}
        ></LoadMore>
      )}
      {isLoading && <Loader />}
    </>
  );
}
