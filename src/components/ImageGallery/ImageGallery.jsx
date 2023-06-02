import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { getSearchImagesApi } from '../../services/imageAPI';
import { Error, ImageList, MoreBtn } from './ImageGallery.styled';
import ImageItem from 'components/ImageItem/ImageItem';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const ImageGallery = ({ search }) => {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [searchCopy, setSearchCopy] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (search !== searchCopy) {
      setPage(1);
      setSearchCopy(search);
    }
  }, [search, searchCopy]);

  useEffect(() => {
    const getSearchImg = () => {
      setIsLoading(true);
      setError(null);
      getSearchImagesApi(search, page)
        .then(imageInfo => {
          setImage(prevImage => {
            if (page === 1) {
              return imageInfo.hits;
            } else {
              return [...prevImage, ...imageInfo.hits];
            }
          });
          setTotalResults(imageInfo.totalHits);
        })
        .catch(err => setError(err.message))
        .finally(() => {
          setIsLoading(false);
        });
    };
    if (search) {
      getSearchImg();
    }
  }, [search, page]);

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = data => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      {error && <Error>{error}</Error>}
      <ImageList>
        {image.map(hit => (
          <ImageItem key={hit.id} hit={hit} handleOpenModal={handleOpenModal} />
        ))}
      </ImageList>
      {isLoading && <Loader />}
      {totalResults > image.length && (
        <MoreBtn type="button" onClick={changePage}>
          Load more images
        </MoreBtn>
      )}
      {modalData && <Modal closeModal={closeModal} modalData={modalData} />}
    </>
  );
};

ImageGallery.propTypes = {
  search: PropTypes.string.isRequired,
};

export default ImageGallery;
