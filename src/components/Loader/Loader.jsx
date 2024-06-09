import React from 'react';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <div className={s.loader}>
        <span className={s.loaderName}></span>
      </div>
    </div>
  );
};

export default Loader;
