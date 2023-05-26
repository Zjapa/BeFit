import styled, { css } from 'styled-components';

export const StyledHeading = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margins }) => [margins?.mt || 0, margins?.mr || 0, margins?.mb || 0, margins?.ml || 0].join(' ')};
  ${({ as }) =>
    as === 'p' &&
    css`
      color: ${({ theme: { colors } }) => colors.subText};
      letter-spacing: 0.5px;
      font-size: 18px;
    `};
  text-align: ${({ align }) => align};
`;
export const ColoredText = styled.span`
  color: ${({ theme: { colors } }) => colors.green};
`;
