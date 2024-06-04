import React from 'react';
import s from './DailyNorma.module.css';
import { useModal } from '../../hooks/useModal';
import Form from '../Form/DailyNormaForm/Form';
import Modal from '../Modal/Modal';

const DailyNorma = () => {
  const { isOpen, toggle } = useModal();
  return (
    <section className={s.section_daily_norma}>
      <h3 className={s.section_title}>My daily norma</h3>
      <div className={s.bottom_section_wrapper}>
        <p className={s.daily_norma}>1.5 L</p>
        <button className={s.btn_edit} onClick={toggle}>
          Edit
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form />
        </Modal>
      )}
    </section>
  );
};

export default DailyNorma;
