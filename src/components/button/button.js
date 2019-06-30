import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button({
  onClick,
  children,
  "aria-label": ariaLabel,
}) {
  return (
    <button
      onClick={onClick}
      className="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string,
};

Button.defaultProps = {
  'aria-label': undefined,
}

export default Button;