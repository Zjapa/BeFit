import styled from 'styled-components';

export const StyledPlanListContainer = styled.section`
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
export const StyledPlanListWrapper = styled.div`
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

export const PlanItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 60px;
  /* @media screen and (max-width: 769px) {
    flex-direction: column;
  } */

  /* @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  } */
`;
