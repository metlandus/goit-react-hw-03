import React from 'react'
import Contact from "./Contact"

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <>
            {contacts.map((contact) => (<Contact contact={contact} key={contact.id} deleteContact={deleteContact} />))}
        </>
    )
}

export default ContactList