import { useState, useEffect } from "react";
import initialContacts from "../contacts.json";
import "./App.css";
// import Contact from "./Contact/Contact";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = window.localStorage.getItem("Contacts");
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    } catch (error) {
      console.error("Error parsing contacts from localStorage", error);
      return initialContacts;
    }
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      if (contacts.length === 0) {
        window.localStorage.removeItem("Contacts");
      } else {
        window.localStorage.setItem("Contacts", JSON.stringify(contacts));
      }
    } catch (error) {
      console.error("Error saving contacts to localStorage", error);
    }
  }, [contacts]);

  const addContact = (newContact) => {
    console.log(newContact);
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
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
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
