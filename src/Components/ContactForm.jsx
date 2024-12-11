import React from 'react'
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'


const ContactForm = () => {
    return (
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
    )
}

export default ContactForm