import React from 'react';
import svg from '../../../img/icons/sprite.svg';
import glass from '../../../img/images/glass.svg';
import s from './TodayWaterItem.module.css';

const TodayWaterItem = () => {
  return (
    <li className={s.list_item}>
      <div className={s.wrapper_align_left}>
        <img src={glass} alt="glass" />
        <p className={s.ml}>200 ml</p>
        <p className={s.time}>14:00 PM</p>
      </div>
      <div className={s.wrapper_align_right}>
        <svg className={s.icon_pen}>
          <use xlinkHref={`${svg}#icon-pen`} />
        </svg>
        <svg className={s.icon_trash}>
          <use xlinkHref={`${svg}#icon-trash`} />
        </svg>
      </div>
    </li>
  );
};

export default TodayWaterItem;
