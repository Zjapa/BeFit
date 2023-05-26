import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 60px;
  width: ${({ width }) => width};
  text-transform: uppercase;
  font-family: Roboto-Bold;
  font-size: 16px;

  transition: 0.2s all ease;
  cursor: pointer;
  ${({ theme: { colors }, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${colors.green};
      border: 2px solid ${colors.green};
      color: black;

      :hover {
        background-color: ${colors.buttonSecondary};
        color: ${colors.white};
      }
    `}

  ${({ theme: { colors }, variant }) =>
    variant === 'primaryInvert' &&
    css`
      background-color: ${colors.green};
      border: 2px solid ${colors.green};
      color: black;

      :hover {
        background-color: transparent;
        color: ${colors.white};
      }
    `}

  ${({ theme: { colors }, variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.buttonSecondary};
      border: 2px solid ${colors.green};
      color: ${colors.white};

      :hover {
        background-color: ${colors.green};
        color: black;
      }
    `}
`;
