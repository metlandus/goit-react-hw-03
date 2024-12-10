import React from 'react'

const Contact = ({ contact }) => {
    return (
        <>
            <h3>{contact.name}</h3>
            <p>{contact.number}</p>
            <button>Delete</button>
        </>
    )
}

export default Contact 