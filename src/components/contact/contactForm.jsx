import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import "./styles/contactForm.css";

const ContactForm = () => {
  return (
    <div className="form">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(40, 'Merkkirajoitus on 40 merkkiä.')
            .required('Vaadittu'),
          email: Yup.string().email('Syötä oikea sähköpostiosoite').required('Vaadittu'),
          message: Yup.string()
            .max(500, 'Merkkiraja on 500 merkkiä.')
            .required('Vaadittu'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {formik => (
          <form className="formFlex" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Nimi</label>
            <input
              className="fieldSize"
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label className="between" htmlFor="email">Sähköposti</label>
            <input className="fieldSize" id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label className="between" htmlFor="message">Viesti</label>
            <Field
              className="fieldSize"
              name="message"
              as="textarea"
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
            <div className="between">
              <button className="buttonSize" type="submit">Lähetä</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;