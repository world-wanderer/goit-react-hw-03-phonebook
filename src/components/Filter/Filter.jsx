import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        value={value}
        onChange={onChange}
        placeholder="Enter name"
      />
    </label>
  );
};

Filter.propTypes = {
  valuer: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
