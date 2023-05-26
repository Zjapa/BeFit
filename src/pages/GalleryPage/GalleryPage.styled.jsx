import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 150px 0px;
  @media (max-width: 1025px) {
    padding: 30px 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px;
  }
`;
