import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  caret-color: white;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  :focus::placeholder {
    color: transparent;
  }
`;
