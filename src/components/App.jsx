import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { LoadMore } from './Button';
import * as API from '../services/api';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    isLoading: false,
    quary: '',
    page: 1,
    error: false,
    images: [],
    total: 0,
  };

  onSubmit = quary => {
    this.setState({ quary, page: 1, images: [] });
  };

  async componentDidUpdate(_, prevState) {
    const { quary, page } = this.state;

    if (prevState.quary !== quary || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const getImg = await API.getImages(quary, page);
        const images = getImg.hits;
        if (images.length === 0) {
          alert(
            `Ooops....
Sorry but we didn't find anything, by your request "${quary}"`
          );
        }
        this.setState(state => {
          return {
            images: [...state.images, ...images],
            total: getImg.total,
          };
        });
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, isLoading, total } = this.state;
    const galleryLength = images.length;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images.length !== 0 && <ImageGallery items={images} />}
        {images.length !== 0 && (
          <LoadMore
            onClick={this.onLoadMore}
            total={total}
            galleryLength={galleryLength}
          ></LoadMore>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
