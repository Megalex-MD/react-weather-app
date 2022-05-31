import React from 'react';
import style from './MyInput.module.scss'

const MyInput = (props) => {
  return (
    <div className={style.searchContainer}>
      <input {...props} className={style.searchForm} />
    </div>
  );
};

export default MyInput;