import styled, { css } from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigationItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  overflow: hidden;
  @media screen and (max-width: 850px) {
    position: fixed;
    top: 80px;
    right: 0px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100vh;
    padding: 20px 20px 40px 40px;
    box-shadow: 0px 0.5px 2px ${({ theme: { colors } }) => colors.buttonSecondary};
    transition: ease-out 0.3s;
    ${({ isMenuOpen }) =>
      !isMenuOpen &&
      css`
        height: 0px;
        padding: 0px 20px 0px 40px;
      `}
  }
`;
