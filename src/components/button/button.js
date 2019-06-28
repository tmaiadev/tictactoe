import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button({
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;