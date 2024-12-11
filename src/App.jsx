import { useState } from "react"
import { Formik, Field, Form } from 'formik';

import ContactForm from "./Components/ContactForm"
import SearchBox from "./Components/SearchBox"
import ContactList from "./Components/ContactList"
import contactsData from "./data.json"

function App() {

    const [searchedContact, setSearchedContact] = useState("")
    const [contact, setContact] = useState(contactsData);

    const addContact = (newContact) => {
        setContact([...contact, newContact]);
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
            <ContactList contacts={contact} />
        </>
    )
}


export default App
