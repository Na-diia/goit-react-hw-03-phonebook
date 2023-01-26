import PropTypes from 'prop-types';
import { Component } from "react";

import styles from './contact-form.module.css';

export class ContactForm extends Component{
 state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  reset() {
    this.setState({
      name: "",
      number: "",
    });
  };

  formChange = ({target}) => {
    const {name, value} = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    event.currentTarget.reset();
  };

  render() {
    return (
       <form autoComplete="on"
       className={styles.form}
       onSubmit={this.handleSubmit}>
        <label htmlFor="name" className={styles.label}>Name
           <input className={styles.input} 
          placeholder="Jacob Mercer"
          type="text" name="name" 
          onChange={this.formChange}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required/>
        </label>
        <label htmlFor="number" className={styles.label}>Number
        <input className={styles.input}
        placeholder=" 257-42-21"
        type="tel"
        onChange={this.formChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        </label>
        <button type="submit" className={styles.btn}> Add contact</button>
       </form>
    )
  };
};