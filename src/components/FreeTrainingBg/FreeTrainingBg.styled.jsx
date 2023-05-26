import styled from 'styled-components';

export const StyledFreeTrainingBgContainer = styled.section`
  position: relative;

  background: radial-gradient(circle, #0d161599 5%, #39665ea2 100%), url(${({ bg }) => bg});
  /* background: url(${({ bg }) => bg}); */
  background-size: cover;
  /* background-repeat: repeat; */
  padding: 150px 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;

export const StyledFreeTrainingBgWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFTContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFTDesc = styled.div`
  margin: 40px 0;
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  @media (min-width: 1025px) {
    width: 25%;
  }
`;
export const StyledFTimageContainer = styled.div``;
