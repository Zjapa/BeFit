import styled from 'styled-components';

export const GalleryModalBackground = styled.div`
  background-color: #000000b1;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GalleryModalPreview = styled.div`
  background: white;
  padding: 10px;
  padding-top: 0;
`;
export const GalleryHeader = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .modal-header-cancel-icon {
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const GalleryImgContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
`;

export const GalleryImgControls = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;

  .modal-image-left,
  .modal-image-right {
    font-size: 40px;
    background: ${({ theme: { colors } }) => colors.black};
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
