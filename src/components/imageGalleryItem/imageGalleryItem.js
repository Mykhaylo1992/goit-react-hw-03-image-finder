import React from "react";
import style from './image.GalleryItem.module.css';
import PropTypes from "prop-types";


const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={style.ImageGalleryItem}>
      {console.log(image)}
      <a href={image.largeImage} >
      <img
        src={image.webformatURL}
        onClick={openModal}
        data-largeurl={image.largeImageURL}
        alt="photo"
        className={style.ImageGalleryItemImage}
      />
      </a>
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  };
