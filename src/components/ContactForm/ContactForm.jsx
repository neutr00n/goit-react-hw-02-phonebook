import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  ContForm,
  Label,
  InputDescrip,
  ContInput,
  Button,
  ErrMessageText,
} from './ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup.string().matches(phoneRegExp, 'Number is not valid').required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = ({ handleFormSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <ContForm>
        <Label>
          <InputDescrip>Name</InputDescrip>
          <ContInput type="text" name="name" />
          <ErrorMessage
            name="name"
            render={msg => <ErrMessageText> {msg} </ErrMessageText>}
          />
        </Label>
        <Label>
          <InputDescrip>Number</InputDescrip>
          <ContInput type="tel" name="number" />
          <ErrorMessage
            name="number"
            render={msg => <ErrMessageText> {msg} </ErrMessageText>}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
