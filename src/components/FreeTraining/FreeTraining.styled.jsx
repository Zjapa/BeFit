import styled from 'styled-components';

export const StyledFreeTrainingContainer = styled.section`
  position: relative;
  background: #39665e;
  background: radial-gradient(circle, #39665e 33%, rgba(53, 87, 82, 1) 100%);
  paddding: 0 70px;
`;

export const StyledFreeTrainingWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  /* align-items: center; */
`;
export const StyledFTContent = styled.div`
  width: 100%;
  justify-self: center;
  padding: 150px 30px;
  flex: 1;

  @media (max-width: 1025px) {
    padding: 70px 30px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px;
  }
`;

export const StyledFTDesc = styled.div`
  margin: 40px 0;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  @media (min-width: 1025px) {
    width: 50%;
  }
`;
export const StyledFTModel = styled.div`
  flex: 1;
  @media (max-width: 1250px) {
    display: none;
  }
`;
