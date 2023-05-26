import PropTypes from 'prop-types';
import { GalleryGrid } from './Gallery.styled';
import GalleryImage from './GalleryImage/GalleryImage';
import { useState } from 'react';
import GalleryModal from './GalleryModal/GalleryModal';
import { createPortal } from 'react-dom';

const Gallery = ({ photos }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const imageComponents = photos.map((photo, index) => (
    <GalleryImage
      key={photo.id}
      {...photo}
      imageIndex={index}
      setClickedImg={setClickedImg}
      setCurrentImgIndex={setCurrentImgIndex}
    />
  ));

  const closeGalleryModal = () => setClickedImg(null);

  const showNextImg = () => {
    if (currentImgIndex + 1 >= photos.length) {
      setCurrentImgIndex(0);
      setClickedImg(photos[0].src);
    } else {
      setClickedImg(photos[currentImgIndex + 1].src);
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  const showPreviousImg = () => {
    if (currentImgIndex - 1 < 0) {
      setCurrentImgIndex(photos.length - 1);
      setClickedImg(photos[photos.length - 1].src);
    } else {
      setClickedImg(photos[currentImgIndex - 1].src);
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };

  return (
    <>
      <GalleryGrid>{imageComponents}</GalleryGrid>

      {clickedImg &&
        createPortal(
          <GalleryModal
            clickedImg={clickedImg}
            currentImgIndex={currentImgIndex}
            closeGalleryModal={closeGalleryModal}
            showNextImg={showNextImg}
            showPreviousImg={showPreviousImg}
          />,
          document.getElementById('root')
        )}
    </>
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
