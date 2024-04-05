
import React from 'react';
import  s  from '../Style.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className={s.button}>Load more</button>
);

export default LoadMoreBtn;



