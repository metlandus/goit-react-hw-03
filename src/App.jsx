import { useState } from "react"
import ContactForm from "./Components/ContactForm"
import SearchBox from "./Components/SearchBox"
import ContactList from "./Components/ContactList"
function App() {

    const [contact, setContact] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
)

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList contacts={ contact } />
        </>
    )
}

export default App