import styled from 'styled-components';

export const StyledProgram = styled.article`
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  padding: 20px;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  justify-content: flex-start;
`;
export const StyledIcon = styled.img`
  height: 30px;
  fill: #ffff;
`;
export const StyledProgramContent = styled.div``;
export const StyledProgramName = styled.h2``;
export const StyledProgramDesc = styled.p`
  color: ${({ theme: { colors } }) => colors.subText};
  font-weight: normal;
`;
