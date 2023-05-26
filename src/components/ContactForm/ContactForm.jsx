import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { ColoredText } from '../Heading/Heading.styled';
import Input from '../Input/Input';
import {
  ButtonWrapper,
  ContactInformation,
  Form,
  FormContainer,
  PersonalInfo,
  StyledContactFormContainer,
  StyledContactFormWrapper,
  TextArea,
} from './ContactForm.styled';

const ContactForm = () => {
  return (
    <StyledContactFormContainer>
      <StyledContactFormWrapper>
        <Heading tag="h1" text="KONTAKTIRAJTE" coloredText="NAS" margins={{ mb: '60px' }} align="center" />
        <FormContainer>
          <ContactInformation>
            <Heading tag="p" coloredText="IMATE LI PITANJE ZA NAS?" margins={{ mb: '30px' }} align="left" />
            <Heading tag="h1" text="STUPITE U KONTAKT" margins={{ mb: '30px' }} align="left" />
            <Heading
              tag="p"
              text="Ne oklevajte da nas kontaktirate ukoliko imate bilo kakvu nedoumicu u vezi sa redovnim vežbanjem, pravilnom ishranom, ili našim kutkom. "
              margins={{ mb: '60px' }}
              align="left"
            />
            <Heading tag="p" margins={{ mb: '20px' }} align="left">
              <ColoredText>Email: </ColoredText>
              befit@email.com
            </Heading>
            <Heading tag="p" margins={{ mb: '20px' }} align="left">
              <ColoredText>Telefon: </ColoredText>
              +381 11 256790
            </Heading>
            <Heading tag="p" margins={{ mb: '20px' }} align="left">
              <ColoredText>Adresa: </ColoredText>
              Bulevar Zorana Đinđića 128
            </Heading>
          </ContactInformation>
          <Form>
            <PersonalInfo>
              <Input placeholder="Name" type="text" name="name" required />
              <Input placeholder="Email" type="email" name="email" required />
            </PersonalInfo>
            <TextArea placeholder="Message" name="message" required />
            <ButtonWrapper>
              <Button variant="primaryInvert" width="100%">
                Pošalji
              </Button>
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </StyledContactFormWrapper>
    </StyledContactFormContainer>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
