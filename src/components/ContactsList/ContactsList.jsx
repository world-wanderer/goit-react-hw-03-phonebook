import PropTypes from 'prop-types';

import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contacts__list_item}>
        <p>
          {name}: {number}
        </p>
        <button
          className={css.list__button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
