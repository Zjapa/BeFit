import styled from 'styled-components';

export const StyledSelectedProgramContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  background-position: center;
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
export const StyledSelectedProgramCardsWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
