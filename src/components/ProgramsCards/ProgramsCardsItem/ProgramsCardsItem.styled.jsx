import styled from 'styled-components';

export const StyledTitle = styled.div`
  margin-bottom: 20px;

  h2 {
    position: relative;
    display: inline-block;
  }

  h2::after {
    position: absolute;
    content: '';
    left: -30px;
    bottom: -5px;
    width: calc(100% + 40px);
    background-color: ${({ theme }) => theme.colors.green};
    height: 5px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
`;
export const CardContent = styled.div`
  padding: 30px;
  height: 45%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 1));

  @media (hover) {
    transform: translateY(65%);
    transition: transform 0.4s ease;
  }

  @media (hover) {
    & > *:not(${StyledTitle}) {
      opacity: 0;
      transition: opacity 0.5s linear;
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 550px;
  overflow: hidden;
  top: 0;

  &:hover ${StyledTitle} h2::after,
  &:focus-within ${StyledTitle} h2::after {
    transform: scaleX(1);
  }

  &:hover ${CardContent}, &:focus-within ${CardContent} {
    transform: translateY(0);
    transition-delay: 500ms;
    * {
      opacity: 1;
    }
  }
  &:focus-within ${CardContent} {
    transition-duration: 0ms;
  }
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
