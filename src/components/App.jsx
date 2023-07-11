import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      currentContacts: [],
    };

    this.state.currentContacts = this.state.contacts;
  }

  addContact = ({ name, number }) => {
    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prev => {
      const newContacts = [...prev.contacts, contact];
      return {
        contacts: newContacts,
        currentContacts: newContacts,
      };
    });
  };

  filterContact = search => {
    if (search === '') {
      this.setState({ currentContacts: this.state.contacts });
      return;
    }

    this.setState({
      currentContacts: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(search)
      ),
    });
  };

  deleteContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts, currentContacts: newContacts };
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
          contacts={this.state.currentContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
