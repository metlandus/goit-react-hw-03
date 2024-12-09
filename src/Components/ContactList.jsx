import React from 'react'
import Contact from "./Contact"

const ContactList = ({ contact }) => {
    return (
        <>
            <Contact contacts={contact} />
        </>
    )
}

export default ContactList