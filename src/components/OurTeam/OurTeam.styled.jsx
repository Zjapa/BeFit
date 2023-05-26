import styled from 'styled-components';

export const StyledOurTeamContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  padding: 150px 70px;
  width: 100%;
  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;
export const StyledOurTeamWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledPLContent = styled.div`
  /* align-self: center; */
  width: 100%;
`;

export const OurTeamItems = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 40px;
`;
