import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import './select.css';

function Select({
  value,
  onChange,
  id,
  name,
  options,
}) {
  return (
    <div className="select">
      <div
        className="select__display"
        aria-hidden
      >
        {options.find(o => o.value === value).label}
        <Icon type="dropdown" />
      </div>
      <select
        id={id}
        name={name}
        onChange={onChange}
        defaultValue={value}
        className="select__input"
      >
        {options
          .map(({
            label,
            value
          }) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default Select;