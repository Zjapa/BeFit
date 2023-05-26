import styled from 'styled-components';

export const FooterArticleContainer = styled.div`
  display: flex;
  flex-direction: column;

  .footer-heading {
    cursor: pointer;
    :hover {
      color: ${({ theme: { colors } }) => colors.green};
    }
  }
`;
