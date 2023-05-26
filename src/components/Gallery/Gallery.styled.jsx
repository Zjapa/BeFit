import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 10px;

  .w-2 {
    grid-column: span 2;
  }

  .w-3 {
    grid-column: span 3;
  }

  .h-2 {
    grid-row: span 2;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    .w-2,
    .w-3,
    .h-2 {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
