import PropTypes from 'prop-types';
import {
  GalleryModalBackground,
  GalleryImgContainer,
  GalleryModalPreview,
  GalleryHeader,
  GalleryImgControls,
} from './GalleryModal.styled';
import { useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const GalleryModal = ({ clickedImg, closeGalleryModal, showNextImg, showPreviousImg }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = '');
  });
  return (
    <GalleryModalBackground>
      <GalleryModalPreview>
        <GalleryHeader>
          <ImCross className="modal-header-cancel-icon" onClick={closeGalleryModal} />
        </GalleryHeader>
        <GalleryImgContainer>
          <img src={clickedImg} />
          <GalleryImgControls>
            <FaArrowLeft className="modal-image-left" onClick={showPreviousImg} />
            <FaArrowRight className="modal-image-right" onClick={showNextImg} />
          </GalleryImgControls>
        </GalleryImgContainer>
      </GalleryModalPreview>
    </GalleryModalBackground>
  );
};

GalleryModal.propTypes = {
  clickedImg: PropTypes.string,
  currentImgIndex: PropTypes.number,
  closeGalleryModal: PropTypes.func,
  showNextImg: PropTypes.func,
  showPreviousImg: PropTypes.func,
};

export default GalleryModal;
