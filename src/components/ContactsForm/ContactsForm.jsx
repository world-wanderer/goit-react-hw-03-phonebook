import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';
import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className={css.form}>
        <label htmlFor="" className={css.form__label}>
          Name
          <input
            type="text"
            name="name"
            className={css.form__input}
            value={this.state.name}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            onChange={this.handleNameChange}
          />
        </label>
        <label htmlFor="" className={css.form__label}>
          Number
          <input
            type="tel"
            name="number"
            className={css.form__input}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit" className={css.form__button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsForm;
