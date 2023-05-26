import styled from 'styled-components';

export const ProgramsContent = styled.div`
  width: 100%;
`;
export const ProgramsImage = styled.div`
  /* background-color: grey; */
  width: 100%;
  height: 100%;

  @media (max-width: 1025px) {
    display: none;
  }
`;

export const StyledProgramsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  gap: 20px;
  padding: 30px 0px;
  @media (max-width: 1025px) {
    padding: 30px 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px;
  }
`;
