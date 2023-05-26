import styled from 'styled-components';

export const ItemContainer = styled.div`
  /* padding: 60px 40px 50px 40px; */
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 450px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 2px ${({ theme: { colors } }) => colors.backgroundSecondary};
  img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  }
`;
export const ItemOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform: translateX(100%);
  transition: transform 0.2s;
  ${ItemContainer}:hover & {
    transform: translateX(0);
  }

  text-align: center;
`;
