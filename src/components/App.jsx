import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prev => {
      return { contacts: [...prev.contacts, contact] };
    });
  };

  filterContact = search => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.includes(search)),
      };
    });
  };

  deleteContact = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}> </ContactForm>
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact}> </Filter>
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}