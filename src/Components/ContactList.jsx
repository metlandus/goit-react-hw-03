import React from 'react'
import Contact from "./Contact"

const ContactList = ({ contacts }) => {
    return (
        <>
            {contacts.map((contact) => (<Contact contact={contact} key={contact.id} />))}
        </>
    )
}

export default ContactList