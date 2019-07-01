import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import './cell.css';

function Cell({
  name,
  value,
  onClick,
  disabled,
}) {
  return (
    <button
      type="button"
      aria-label={Boolean(value) ? `${name}: ${value}` : 'Empty'}
      disabled={disabled || Boolean(value)}
      className="cell"
      onClick={onClick}
    >
      {value
        ? (
          <div className="animated bounceIn">
            <Icon
              type={value}
              aria-hidden
              size={50}
              color={value === 'o'
                ? 'var(--primary-color)'
                : 'var(--secondary-color)'}
            />
          </div>
        ) : null}
    </button>
  )
}

Cell.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['x', 'o']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Cell.defaultProps = {
  disabled: false,
  value: null,
};

export default Cell;

