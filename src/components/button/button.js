import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button({
  id,
  onClick,
  children,
  "aria-label": ariaLabel,
  primary,
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={'button '
        + (primary ? 'button--primary ' : '')}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  'aria-label': PropTypes.string,
};

Button.defaultProps = {
  id: undefined,
  'aria-label': undefined,
  primary: false,
}

export default Button;