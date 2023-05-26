import styled from 'styled-components';

export const StyledClientCommentsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  padding: 150px 70px;

  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;
export const StyledClientCommentsWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledClientCommentsContent = styled.div`
  /* align-self: center; */
  width: 100%;
`;

export const ClientItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
`;
