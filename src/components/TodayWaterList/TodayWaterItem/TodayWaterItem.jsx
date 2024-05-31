import React from 'react';
import svg from '../../../img/icons/sprite.svg';
import glass from '../../../img/images/glass.svg';
import s from './TodayWaterItem.module.css';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import Form from '../../Form/AddAndEditForm/Form';

const TodayWaterItem = () => {
  const { isOpen, toggle } = useModal();

  return (
    <li className={s.list_item}>
      <div className={s.wrapper_align_left}>
        <img src={glass} alt="glass" />
        <p className={s.ml}>200 ml</p>
        <p className={s.time}>14:00 PM</p>
      </div>
      <div className={s.wrapper_align_right}>
        <button className={s.icon_pen_wrapper} onClick={toggle}>
          <svg className={s.icon_pen}>
            <use xlinkHref={`${svg}#icon-pen`} />
          </svg>
        </button>
        <button className={s.icon_trash_wrapper}>
          <svg className={s.icon_trash}>
            <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form type="edit" amount={0} date={new Date()} />
        </Modal>
      )}
    </li>
  );
};

export default TodayWaterItem;
