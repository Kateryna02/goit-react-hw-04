

import React from 'react';
import ImageCard from './ImageCard';
import s from '../Style.module.css';


const ImageGallery = ({ images, openModal }) => {
    console.log(images);
    return (
        <ul className={s.gallery}>
            {images.map((image, index) => (
                <li key={`${image.id}-${index}`} className={s.item}>
                    <ImageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
};
export default ImageGallery;






