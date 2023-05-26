/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { ImageContainer } from './GalleryImage.styled';

const GalleryImage = ({ className, alt, src, imageIndex, setClickedImg, setCurrentImgIndex }) => {
  const handleImageClick = () => {
    setClickedImg(src);
    setCurrentImgIndex(imageIndex);
  };

  return (
    <ImageContainer className={className}>
      <img src={src} alt={alt} onClick={handleImageClick} />
    </ImageContainer>
  );
};

GalleryImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GalleryImage;
