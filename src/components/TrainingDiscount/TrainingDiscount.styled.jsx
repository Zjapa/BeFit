import styled from 'styled-components';

export const StyledTrainingDiscountContainer = styled.section`
  position: relative;
  /* background: #39665e; */
  background: radial-gradient(circle, #0d161599 5%, #39665ea2 100%), url(${({ bg }) => bg});
  padding: 150px 70px;

  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;

export const StyledTrainingDiscountWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledTrainingDiscountContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTrainingDiscountDesc = styled.div`
  margin: 40px 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;

  @media (max-width: 1025px) {
    gap: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const HLine = styled.div`
  display: block;
  height: 60px;
  width: 2px;
  background-color: ${({ theme: { colors } }) => colors.subText};
  @media (max-width: 1025px) {
    display: none;
  }
`;
export const StyledTrainingDiscountimageContainer = styled.div``;
