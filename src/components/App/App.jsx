import React, { Component }  from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import styles from './app.module.css';

export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("my-contact"));
    if(contacts && contacts.length) {
      this.setState({contacts});
    };
  };

  componentDidUpdate(prevProps, prevState) {
   const {contacts} = this.state;
   if(prevState.contacts.length !== contacts.length) {
    localStorage.setItem("my-contact", JSON.stringify(contacts))
   };
  };

  addContact = ({name, number}) => {
    const contact = { id: nanoid(), name, number};

    if(this.state.contacts.find(item => {
      return item.name.toLowerCase() === contact.name.toLowerCase();
    })) {
      return alert (`${contact.name} is already in contacts!`);
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterChange = ({target}) => {
    this.setState({ filter: target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filterContact = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

   return (
    <div className={styles.container}>
    <h1 className={styles.title}>Phone Book</h1>
    <ContactForm 
    addContact={this.addContact}/>
    
    <h2 className={styles.name}>Contacts</h2>
    <Filter filter={this.filterChange} value={this.state.filter}/>
    {this.state.contacts.length > 0 && <ContactList filter={filterContact}
    deleteContact={this.deleteContact} />}
    {this.state.contacts.length <=0 && <p className={styles.text}>No contacts in list!</p>}
  </div>
  );
    };
};
