import styled from 'styled-components';

export const StyledCenovnikContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  background-position: center;
  display: flex;
  align-items: center;
  padding: 150px 70px;
  width: 100%;
  @media (max-width: 1025px) {
    padding: 70px;
  }

  @media screen and (max-width: 769px) {
    padding: 30px;
  }
`;

export const StyledCenovnikWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.backgroundSecondary}; */
  width: 100%;
  min-height: 40vh;
  display: flex;
  padding: 50px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ContactInformation = styled.div`
  width: 100%;
  flex: 1;
  padding-right: 70px;
`;
export const Form = styled.form`
  height: 100%;
  flex: 1;
`;

export const PersonalInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;
export const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 10px;
  height: 250px;
  width: 100%;
  resize: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: 'Roboto-Regular';

  :focus::placeholder {
    color: transparent;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  width: 30%;
`;

export const CenovnikFormContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  margin-top: 200px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
