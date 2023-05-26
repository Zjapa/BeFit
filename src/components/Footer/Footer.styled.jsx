import styled from 'styled-components';

export const StyledFooterContainer = styled.section`
  background: radial-gradient(circle, #39665e 33%, #355752 100%);
  padding: 100px 70px 0px 70px;
  margin-top: auto;
  width: 100%;

  @media (max-width: 1025px) {
    padding: 70px 70px 0px 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px 30px 0px 30px;
  }
`;
export const StyledFooterWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
`;
export const LogoContent = styled.div``;
export const SiteMap = styled.div``;
export const Services = styled.div``;
export const Contact = styled.div``;
export const BotFooter = styled.div`
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  margin-top: 10px;
  width: 100%;
  padding: 20px 0px;
  gap: 20px;
  @media screen and (max-width: 769px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const SocialList = styled.div`
  display: flex;
  gap: 40px;

  svg {
    cursor: pointer;
    :hover {
      stroke: ${({ theme }) => theme.colors.green};
    }
  }
`;
