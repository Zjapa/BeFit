import { useState } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { ColoredText } from "../Heading/Heading.styled";
import Input from "../Input/Input";
import {
  ButtonWrapper,
  ContactInformation,
  Form,
  FormContainer,
  PersonalInfo,
  StyledContactFormContainer,
  StyledContactFormWrapper,
  TextArea,
} from "./ContactForm.styled";
import Modal from "../Modal/Modal";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target ?? {};
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isSuccess = true;
    if (isSuccess) {
      setModalMessage("Vaša poruka je uspešno poslata");
    } else {
      setModalMessage("Došlo je do greške. Pokušajte ponovo.");
    }

    setTimeout(() => {
      setIsModalOpen(true);

      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledContactFormContainer>
      <StyledContactFormWrapper>
        <Heading
          tag="h1"
          text="KONTAKTIRAJTE"
          coloredText="NAS"
          margins={{ mb: "60px" }}
          align="center"
        />
        <FormContainer>
          <ContactInformation>
            <Heading
              tag="p"
              coloredText="IMATE LI PITANJE ZA NAS?"
              margins={{ mb: "30px" }}
              align="left"
            />
            <Heading
              tag="h1"
              text="STUPITE U KONTAKT"
              margins={{ mb: "30px" }}
              align="left"
            />
            <Heading
              tag="p"
              text="Ne oklevajte da nas kontaktirate ukoliko imate bilo kakvu nedoumicu u vezi sa redovnim vežbanjem, pravilnom ishranom, ili našim kutkom. "
              margins={{ mb: "60px" }}
              align="left"
            />
            <Heading tag="p" margins={{ mb: "20px" }} align="left">
              <ColoredText>Email: </ColoredText>
              befit@email.com
            </Heading>
            <Heading tag="p" margins={{ mb: "20px" }} align="left">
              <ColoredText>Telefon: </ColoredText>
              +381 11 256790
            </Heading>
            <Heading tag="p" margins={{ mb: "20px" }} align="left">
              <ColoredText>Adresa: </ColoredText>
              Bulevar Zorana Đinđića 128
            </Heading>
          </ContactInformation>
          <Form onSubmit={handleSubmitForm}>
            <PersonalInfo>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInput}
                required
              />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </PersonalInfo>
            <TextArea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInput}
              required
            />
            <ButtonWrapper>
              <Button variant="primaryInvert" width="100%">
                Pošalji
              </Button>
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </StyledContactFormWrapper>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Heading tag="h3" align="center" margins={{ mb: "50px", mt: "10px" }}>
            <ColoredText>{modalMessage}</ColoredText>
          </Heading>
          <Button onClick={handleCloseModal} variant="primary" width="50%">
            Zatvori
          </Button>
        </Modal>
      )}
    </StyledContactFormContainer>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
