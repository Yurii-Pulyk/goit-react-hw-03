import { useEffect, useState } from 'react';
// import { useId } from 'react';
// import * as Yup from 'yup';

import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
const LOCAL_STORAGE_KEY = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox filter={filter} onFilterChange={setFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
