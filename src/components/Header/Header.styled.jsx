import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  height: 80px;
`;

export const StyledHeaderWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const StyledLogo = styled.div``;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledList = styled.nav`
  /* font-family: ${({ theme }) => theme.fonts.montserratRegular}; */
  list-style: none;
  display: flex;
`;
export const StyledListItem = styled.h4`
  font-size: 18px;
  text-transform: uppercase;
  /* font-family: ${({ theme }) => theme.fonts.montserratRegular}; */
`;
