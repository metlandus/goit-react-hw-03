import { useState, useEffect } from "react"
import { Formik, Field, Form } from 'formik';

import ContactForm from "./Components/ContactForm"
import SearchBox from "./Components/SearchBox"
import ContactList from "./Components/ContactList"
import contactsData from "./data.json"

function App() {
    const [searchedContact, setSearchedContact] = useState("")
    const [contact, setContact] = useState(JSON.parse(localStorage.getItem("contacts")) || contactsData);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contact), contact);
    })

    const addContact = (newContact) => {
        setContact([...contact, newContact]);
    };

    const deleteContact = (id) => {
        setContact(contact.filter((c) => c.id !== id));
    };

    function handleChange(e) {
        const searchValue = e.target.value.toLowerCase();
        setSearchedContact(searchValue);
        if (searchValue === "") {
            setContact(contactsData)
        }
        else {
            const filteredContacts = contactsData.filter((contact) =>
                contact.name.toLowerCase().includes(searchValue)
            )
            setContact(filteredContacts);
        }
    }

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox onChange={handleChange} />
            <ContactList contacts={contact} deleteContact={deleteContact} />
        </>
    )
}


export default App
