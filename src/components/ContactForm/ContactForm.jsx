import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export default function ContactForm({ onAddContact }) {
  const initialValues = {
    name: '',
    number: '',
  };
  const nameFieldId = useId();
  const contactFieldId = useId();
  const contactId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({ id: contactId, ...values });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <label htmlFor={contactFieldId}>Contact</label>
          <Field type="tel" name="number" id={contactFieldId} />
          {errors.number && touched.number ? <div>{errors.number}</div> : null}
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}
