import React from "react";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const Modal = ({curentImage,closeModal}) => {
    return (
<div className={styles.Overlay} onClick = {closeModal}>
  <div className={styles.Modal}>
    <img src={curentImage} alt="Image" />
    {console.log(curentImage)}
  </div>
</div>
        
    );
}

export default Modal;

Modal.propTypes = {
  curentImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
