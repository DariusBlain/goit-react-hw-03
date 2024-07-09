import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/)
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.label} htmlFor={numberFieldId}>
          Number
          <Field type="number" name="number" id={numberFieldId} />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
