import React from 'react'
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'
import contactsData from "../data.json"


const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
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
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Jane Doe" />
                <label htmlFor="number">Number</label>
                <Field
                    id="number"
                    name="number"
                    placeholder="jane@acme.com"
                />
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm