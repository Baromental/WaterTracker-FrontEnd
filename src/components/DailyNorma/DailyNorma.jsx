import React from 'react';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../redux/auth/authSlice';
import { useModal } from '../../hooks/useModal';
import Form from '../Form/DailyNormaForm/Form';
import Modal from '../Modal/Modal';
import s from './DailyNorma.module.css';

const DailyNorma = () => {
  const waterRate = useSelector(selectWaterRate);

  const { isOpen, toggle } = useModal();
  return (
    <section className={s.section_daily_norma}>
      <h3 className={s.section_title}>My daily norma</h3>
      <div className={s.bottom_section_wrapper}>
        <p className={s.daily_norma}>{waterRate} L</p>
        <button className={s.btn_edit} onClick={toggle}>
          Edit
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form closeModal={toggle} />
        </Modal>
      )}
    </section>
  );
};

export default DailyNorma;
