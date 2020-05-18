import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ handleClick }) => (
  <button className={styles.Button} type="button" onClick={handleClick}>
    Load more
  </button>
);


export default Button;

Button.propType = {
  handleClick: PropTypes.func.isRequired,
};

