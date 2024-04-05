
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import CustomLoader from './components/Loader';
import LoadMoreBtn from './components/LoadMoreBtn';
import fetchImages from './components/Api';
import ImageModal from './components/ImageModal';
import ErrorMessage from './components/ErrorMessage';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const newImages = await fetchImages(searchQuery, page);
        setTotal(newImages.total);
        setImages((prevImages) => [...prevImages, ...newImages.results]);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page, searchQuery]);

  const handleSearch = (query) => {
    setPage(1); 
    setSearchQuery(query);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (imageUrl, alt) => {
    setSelectedImageUrl(imageUrl);
    setSelectedImageAlt(alt);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={handleOpenModal} />
      {isLoading && <CustomLoader />}
      {images.length > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalOpen}
        closeModal={handleCloseModal}
        imageUrl={selectedImageUrl}
        alt={selectedImageAlt}
      />
      <Toaster />
    </div>
  );
};

export default App;