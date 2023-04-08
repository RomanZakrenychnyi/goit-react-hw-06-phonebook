import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const handleAddContact = event => {
    event.preventDefault();
    let name = event.target.children.name.value;
    let number = event.target.children.number.value;

    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);

    event.target.children.name.value = '';
    event.target.children.number.value = '';
  };

  const handelFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
  };

  const handleDeleteBtnClick = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm handleAddContact={handleAddContact} />
      </Section>
      <Filter handelFilter={handelFilter} />
      <Section title="Contacts">
        <ContactList
          contacts={filteredContacts()}
          handleDeleteBtnClick={handleDeleteBtnClick}
        />
      </Section>
    </div>
  );
};