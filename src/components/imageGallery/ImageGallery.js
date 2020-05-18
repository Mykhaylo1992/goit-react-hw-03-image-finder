import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import style from './imsgeGallery.module.css';
import PropTypes from "prop-types";

const ImageGallery = ({images, openModal}) => {
    return (
        <ul className={style.ImageGallery}>
            {images.map(image => <ImageGalleryItem key={image.id} image={image} openModal={openModal} />)}
        </ul>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    openModal: PropTypes.func.isRequired,
    };
