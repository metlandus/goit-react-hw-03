import React from 'react'

const Contact = ({ contact, deleteContact }) => {
    return (
        <>
            <h3>{contact.name}</h3>
            <p>{contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </>
    )
}

export default Contact 