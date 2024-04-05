

import React from 'react';
import s from '../Style.module.css'

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular, image.alt_description);
  };

  return (
    <div className={s.card}>
      <img src={image.urls.small} alt={image.alt_description} onClick={handleClick} className={ s.cartItem} />
      <div className={s.title}>{image.alt_description}</div>
    </div>
  );
};
export default ImageCard;







