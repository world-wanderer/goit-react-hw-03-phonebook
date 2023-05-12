import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

class App extends Component {
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
    console.log(name);

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findName = name.toLocaleLowerCase().trim();
    const existContact = this.state.contacts.some(
      contact => contact.name.toLocaleLowerCase().trim() === findName
    );

    if (existContact) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalazedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalazedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();

    return (
      <section className={css.content}>
        <div className={css.content__container}>
          <h1>Phonebook</h1>
          <ContactsForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />

          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </section>
    );
  }
}

export default App;
