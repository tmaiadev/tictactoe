import React from 'react';
import PropTypes from 'prop-types';

const ICON = {
  dropdown: <path d="M128 192l128 128 128-128z" />,
  menu: <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />,
  x: <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>,
  o: <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"/>,
};

function Icon({
  type,
  color,
  size,
  "aria-hidden": ariaHidden,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ fill: color, width: size, height: size }}
      aria-hidden={ariaHidden}
    >
      {ICON[type]}
    </svg>
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICON)),
  color: PropTypes.string,
  size: PropTypes.number,
  'aria-hidden': PropTypes.bool,
};

Icon.defaultProps = {
  color: 'var(--text-color)',
  size: 16,
  'aria-hidden': false,
};

export default Icon;