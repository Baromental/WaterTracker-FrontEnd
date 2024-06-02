import React from 'react';
import { useSelector } from 'react-redux';
import { selectPercent } from '../../redux/water/waterSlice';
import s from './WaterRatioPanel.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useModal } from '../../hooks/useModal';
import Form from '../Form/AddAndEditForm/Form';
import { FiPlusCircle } from 'react-icons/fi';

const WaterRatioPanel = () => {
  const percent = useSelector(selectPercent);
  const { isOpen, toggle } = useModal();
  return (
    <section className={s.water_ratio_section}>
      <div className={s.top_section_wrapper}>
        <h3 className={s.section_title}>Today</h3>
        <div className={s.progress_bar_wrapper}>
          <div className={s.progress_bar}>
            <div className={s.progress} style={{ width: `${percent}%` }}></div>
          </div>
          <div className={s.circle} style={{ left: `${percent}%` }}></div>
        </div>
        <div className={s.marks_wrapper}>
          <div className={s.mark}></div>
          <div className={s.mark}></div>
          <div className={s.mark}></div>
        </div>
        <div className={s.marks_label_wrapper}>
          <div className={s.mark_label}>0%</div>
          <div className={s.mark_label_middle}>50%</div>
          <div className={s.mark_label}>100%</div>
        </div>
      </div>
      <div className={s.bottom_section_wrapper}>
        <Button type="button" className="add" onClick={toggle}>
          <FiPlusCircle className={s.icon_plus_circle} />
          <p className={s.btn_name}>Add Water</p>
        </Button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form type="add" amount={0} date={new Date()} closeModal={toggle} />
        </Modal>
      )}
    </section>
  );
};

export default WaterRatioPanel;
