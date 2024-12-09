import React from 'react'
import Contact from "./Contact"

const ContactList = ({ contacts }) => {
    return (
        <>
            <Contact contacts={contacts} />
        </>
    )
}

export default ContactList