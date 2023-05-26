import styled from 'styled-components';
export const PlanItemContainer = styled.article`
  padding: 30px;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  background: linear-gradient(-135deg, transparent 35px, ${({ theme: { colors } }) => colors.backgroundSecondary} 0);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 450px;
  justify-content: space-between;
`;
export const Price = styled.div`
  display: flex;
  margin: 15px 0px 30px 0px;

  /* align-items: flex-end; */
`;

export const Currency = styled.span`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 1.5rem;
`;
export const Amount = styled.span`
  color: ${({ theme: { colors } }) => colors.green};
  font-size: 2rem;
`;
export const Type = styled.span`
  color: ${({ theme: { colors } }) => colors.subText};
  font-size: 18px;
  margin-left: 5px;
  align-self: flex-end;
  padding-bottom: 4px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.subText};
  margin-bottom: 30px;
`;

export const Description = styled.ul`
  margin-left: 15px;
  margin-bottom: 30px;
  min-height: 40%;
  list-style: none;
`;
export const DescItem = styled.li`
  color: ${({ theme: { colors } }) => colors.subText};
  font-size: 18px;
  margin-bottom: 20px;

  &::before {
    content: '•';
    color: ${({ theme: { colors } }) => colors.green};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
