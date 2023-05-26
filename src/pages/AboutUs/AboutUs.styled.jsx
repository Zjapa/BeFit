import styled from 'styled-components';

export const AboutUsContent = styled.div`
  width: 100%;
`;
export const AboutUsImage = styled.div`
  /* background-color: grey; */
  width: 100%;
  height: 100%;

  @media (max-width: 1025px) {
    display: none;
  }
`;

export const StyledAboutUsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0px;
  @media (max-width: 1025px) {
    padding: 30px 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px;
  }
`;

export const StyledAboutUsContainer = styled.section`
  width: 100%;
  height: 60vh;
  background: #39665e;
  background: radial-gradient(circle, #39665e 33%, rgba(53, 87, 82, 1) 100%);
`;
