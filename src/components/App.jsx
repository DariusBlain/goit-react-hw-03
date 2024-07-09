import { useState } from "react";
import initialContacts from "../contacts.json";
import "./App.css";
// import Contact from "./Contact/Contact";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    console.log(newContact);
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}

export default App;
