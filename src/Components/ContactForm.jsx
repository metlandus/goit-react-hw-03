import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import contactsData from "../data.json"
import * as yup from 'yup';

const validation = yup.object().shape({
    name: yup.string().min(3).max(50).required("required"),
    number: yup.number().required("required")
})

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(4),
            name: values.name,
            number: values.number,
        };
        addContact(newContact);
        resetForm();
    }
    

    return (
        <Formik
            initialValues={{
                id: '',
                name: '',
                number: '',
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Jane Doe" />
                <ErrorMessage name="name" component="div" className="error" />
                <label htmlFor="number">Number</label>
                <Field
                    id="number"
                    name="number"
                    placeholder="jane@acme.com"
                />
                <ErrorMessage name="number" component="div" className="error" />
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm