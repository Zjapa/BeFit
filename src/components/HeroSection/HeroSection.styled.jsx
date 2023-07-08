import styled from 'styled-components';

export const HeroSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  height: 70vh;
  background: #39665e;
  background: radial-gradient(circle, #39665e 33%, rgba(53, 87, 82, 1) 100%);
`;
export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  height: 100%;
  max-width: 1600px;
`;
export const TextContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  padding: 150px 30px;

  @media (max-width: 1025px) {
    padding: 70px 30px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px;
  }
`;
export const ModelSection = styled.div`
  height: 100%;
  flex: 1;
  @media (max-width: 1250px) {
    display: none;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
  width: 60%;
  gap: 10px;
  display: flex;
`;
export const Title = styled.h1`
  font-size: 100px;
  /* width: 60%; */
  color: white;
`;

export const LoadingStyle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  height: 100%;
`;
