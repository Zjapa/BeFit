import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  height: 80px;
  box-shadow: 0px 0.5px 2px ${({ theme: { colors } }) => colors.buttonSecondary};
`;

export const StyledHeaderWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1280px) {
    padding: 0px 70px;
  }
`;
export const Logo = styled.div`
  height: 50px;
`;
