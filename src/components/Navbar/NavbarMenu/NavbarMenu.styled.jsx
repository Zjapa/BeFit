import styled, { css } from 'styled-components';

export const StyledMenu = styled.div`
  position: relative;
  /* background-color: red; */
  height: 30px;
  width: 35px;
  cursor: pointer;

  @media screen and (min-width: 850px) {
    display: none;
  }
`;
export const StyledBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  &:nth-child(1) {
    transform: translateY(-10px);
    transition: 0.5s ease;
  }
  &:nth-child(2) {
    transition: 0.5s ease;
  }
  &:nth-child(3) {
    transform: translateY(10px);
    transition: 0.5s ease;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      &:nth-child(1) {
        transform: translateY(-50%) rotate(-45deg);
        transition: 0.5s ease;
      }
      &:nth-child(2) {
        transform: translateX(-50%);
        opacity: 0;
        transition: 0.5s ease;
      }
      &:nth-child(3) {
        transform: translateY(-50%) rotate(45deg);
        transition: 0.5s ease;
      }
    `}
`;
