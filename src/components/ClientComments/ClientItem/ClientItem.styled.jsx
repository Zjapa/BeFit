import styled from 'styled-components';

export const ClientItemContainer = styled.article`
  position: relative;
  padding: 60px 40px 50px 40px;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Image = styled.div`
  position: absolute;
  top: -70px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 4px solid ${({ theme: { colors } }) => colors.background};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
`;
