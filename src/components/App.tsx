import { useEffect, useState } from "react";
import { IMG_PER_PAGE } from "../serveses/apiConst";
import { getPhotos } from "../serveses/getPhotos";
import { DivApp } from "./App.styled";
import { Button } from "./Button/Button";
import { ErrorCard } from "./ErrorCard/ErrorCard";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    searchQuery && imageSearch();
  }, [searchQuery, page]);

  const handleSearch = (newSearchQuery) => {
    if (newSearchQuery !== searchQuery) {
      setSearchQuery(newSearchQuery);
      setPage(1);
      setImages([]);
    }
  };
  const handlerLoadMore = () => {
    setPage(page + 1);
  };
  const handleImageClick = (image) => {
    setModalImage(image);
    toggleModal();
  };

  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };
  // const toggleIsError = () => {
  //   setIsError(!isError);
  // };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const imageSearch = async () => {
    setIsLoading(!isLoading);
    setIsError(false);

    try {
      const data = await getPhotos(searchQuery, page);
      setImages([...images, ...data.hits]);
    } catch (error) {
      console.log(error);
      setIsError((previsError) => {
        setIsError(!previsError);
      });
      setTimeout(() => {
        setIsError(!isError);
      }, 3000);
    } finally {
      setIsLoading((prevIsLoading) => {
        setIsLoading(!prevIsLoading);
      });
    }
  };

  return (
    <DivApp>
      <Searchbar handleSearch={handleSearch} />
      {isError && <ErrorCard>Unable to display photos!</ErrorCard>}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {showModal && <Modal largeImg={modalImage} onClose={toggleModal} />}
      {isLoading && <Loader />}
      {images.length > 0 && images.length / page === IMG_PER_PAGE && (
        <Button onButtonClick={handlerLoadMore} />
      )}
    </DivApp>
  );
};

// export class App extends Component {
//   state = {
//     searchQuery: "",
//     page: 1,
//     images: [],
//     isLoading: false,
//     isError: false,
//     showModal: false,
//     modalImage: "",
//   };

//   componentDidUpdate(prevProps, { searchQuery, page }) {
//     if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
//       this.imageSearch();
//     }
//   }

//   handleSearch = (searchQuery) => {
//     if (searchQuery !== this.state.searchQuery) {
//       this.setState({ searchQuery, page: 1, images: [] });
//     }
//   };
//   handlerLoadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };
//   handleImageClick = (image) => {
//     this.setState({ modalImage: image });
//     this.toggleModal();
//   };

//   toggleIsLoading = () => {
//     this.setState(({ isLoading }) => ({
//       isLoading: !isLoading,
//     }));
//   };
//   toggleIsError = () => {
//     this.setState(({ isError }) => ({
//       isError: !isError,
//     }));
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   imageSearch = async () => {
//     const { searchQuery, page } = this.state;
//     this.toggleIsLoading();
//     try {
//       const data = await getPhotos(searchQuery, page);

//       this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
//     } catch (error) {
//       console.log(error);
//       this.toggleIsError();
//       setTimeout(() => {
//         this.toggleIsError();
//       }, 3000);
//     } finally {
//       this.toggleIsLoading();
//     }
//   };

//   render() {
//     const { page, images, isLoading, isError, showModal, modalImage } =
//       this.state;
//     return (
//       <DivApp>
//         <Searchbar handleSearch={this.handleSearch} />
//         {isError && <ErrorCard>Unable to display photos!</ErrorCard>}
//         {images.length > 0 && (
//           <ImageGallery images={images} onImageClick={this.handleImageClick} />
//         )}
//         {showModal && (
//           <Modal largeImg={modalImage} onClose={this.toggleModal} />
//         )}
//         {isLoading && <Loader />}
//         {images.length > 0 && images.length / page === IMG_PER_PAGE && (
//           <Button onButtonClick={this.handlerLoadMore} />
//         )}
//       </DivApp>
//     );
//   }
// }
