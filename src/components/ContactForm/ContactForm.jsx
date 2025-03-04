import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

const initialValues = {
  userName: '',
  userNumber: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const contactFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <label htmlFor={contactFieldId}>Contact</label>
        <Field type="email" name="email" id={contactFieldId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
