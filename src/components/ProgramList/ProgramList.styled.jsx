import styled from 'styled-components';

export const StyledProgramSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1215px) {
    position: relative;
    height: 50vh;
  }
`;
export const StyledProgramListContainer = styled.section`
  max-width: 1450px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 2px 10px black;
  padding: 70px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1215px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
  }

  @media (min-width: 1215px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
  }

  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;

export const StyledProgramListWrapper = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;
export const StyledProgramList = styled.section`
  display: grid;
  gap: 20px;
  margin-top: 40px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
