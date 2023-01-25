import styled, { css } from 'styled-components';

export const StyledHeading = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: ${({ weight }) => weight};
  margin-bottom: 20px;
  ${({ as }) =>
    as === 'p' &&
    css`
      color: ${({ theme: { colors } }) => colors.subText};
    `}
`;
export const ColoredText = styled.span`
  color: ${({ theme: { colors } }) => colors.green};
`;
