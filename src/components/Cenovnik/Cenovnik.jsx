import Button from '../Button/Button';
import { ContactInformation } from '../ContactForm/ContactForm.styled';
import { ButtonWrapper } from '../ContactForm/ContactForm.styled';
import { TextArea } from '../ContactForm/ContactForm.styled';
import { PersonalInfo } from '../ContactForm/ContactForm.styled';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import PlanItem from '../PlanList/PlanItem/PlanItem';
import { planList } from '../PlanList/PlanList.const';
import { PlanItems } from '../PlanList/PlanList.styled';
import { CenovnikFormContainer, Form, StyledCenovnikContainer, StyledCenovnikWrapper } from './Cenovnik.styled';

const Cenovnik = () => {
  return (
    <StyledCenovnikContainer>
      <StyledCenovnikWrapper>
        <Heading tag="h1" text="NAŠ" coloredText="CENOVNIK" margins={{ mb: '60px' }} align="center" />

        <PlanItems>
          {planList.map((plan) => (
            <PlanItem key={plan.heading} plan={plan} isFromCenovnik={true} />
          ))}
        </PlanItems>
        <CenovnikFormContainer>
          <ContactInformation>
            <Heading tag="p" coloredText="POSTANITE DEO BEFIT PORODICE" margins={{ mb: '30px' }} align="left" />
            <Heading tag="h1" text="OSTVARITE POPUST NA  STANDARD ČLANARINU" margins={{ mb: '30px' }} align="left" />
            <Heading
              tag="p"
              text="Uplatite nekoliko meseci unapred i u zavisnosti od broja meseci ostvarite od 10% do 33% popusta na članarinu."
              margins={{ mb: '60px' }}
              align="left"
            />
            <Heading tag="p" coloredText="3 MESECA - 8.100 RSD" margins={{ mb: '5px' }} align="left" />
            <Heading tag="p" text="Popust 10%" margins={{ mb: '20px' }} align="left" />

            <Heading tag="p" coloredText="6 MESECA - 14.400 RSD" margins={{ mb: '5px' }} align="left" />
            <Heading tag="p" text="Popust 20%" margins={{ mb: '20px' }} align="left" />

            <Heading tag="p" coloredText="9 MESECA - 21.600 RSD" margins={{ mb: '5px' }} align="left" />
            <Heading tag="p" text="Popust 30%" margins={{ mb: '20px' }} align="left" />
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
        </CenovnikFormContainer>
      </StyledCenovnikWrapper>
    </StyledCenovnikContainer>
  );
};

Cenovnik.propTypes = {};

export default Cenovnik;
