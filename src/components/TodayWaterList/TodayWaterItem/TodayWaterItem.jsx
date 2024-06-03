import React, { useState } from 'react';
import svg from '../../../img/icons/sprite.svg';
import glass from '../../../img/images/glass.svg';
import s from './TodayWaterItem.module.css';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import Form from '../../Form/AddEditDeleteWaterForm/Form';

import formatDate from '../../../helpers/formatDate';

const TodayWaterItem = ({ note }) => {
  const { isOpen, toggle } = useModal();
  const { amount, date, _id } = note;
  const [formType, setFormType] = useState(null);

  const handleOpenModal = type => {
    setFormType(type);
    toggle();
  };

  return (
    <li className={s.list_item}>
      <div className={s.wrapper_align_left}>
        <img src={glass} alt="glass" />
        <p className={s.ml}>{amount} ml</p>
        <p className={s.time}>{formatDate(date)}</p>
      </div>
      <div className={s.wrapper_align_right}>
        <button
          className={s.icon_pen_wrapper}
          onClick={() => handleOpenModal('edit')}
        >
          <svg className={s.icon_pen}>
            <use xlinkHref={`${svg}#icon-pen`} />
          </svg>
        </button>
        <button
          className={s.icon_trash_wrapper}
          onClick={() => handleOpenModal('delete')}
        >
          <svg className={s.icon_trash}>
            <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form
            type={formType}
            id={_id}
            amount={amount}
            date={new Date(date)}
            closeModal={toggle}
          />
        </Modal>
      )}
    </li>
  );
};

export default TodayWaterItem;
