import React from 'react';
import { useModal } from '../../hooks/useModal';
import WaterTodayItem from '../TodayWaterList/TodayWaterItem/TodayWaterItem';
import s from './TodayWaterList.module.css';
import { FiPlus } from 'react-icons/fi';
import { CustomScroll } from 'react-custom-scroll';
import Modal from '../Modal/Modal';
import Form from '../Form/AddAndEditForm/Form';

const TodayWaterList = () => {
  const { isOpen, toggle } = useModal();

  const items = Array.from({ length: 5 }, (_, index) => (
    <WaterTodayItem key={index} />
  ));

  return (
    <section className={s.today_section}>
      <h2 className={s.section_title}>Today</h2>
      <div className={s.custom_scroll_container}>
        <CustomScroll
          heightRelativeToParent="100%"
          handleClass={s.rcs_inner_handle}
        >
          <ul className={s.list}>{items}</ul>
        </CustomScroll>
      </div>
      <button className={s.add_btn} onClick={toggle}>
        <FiPlus className={s.icon_plus} />
        Add water
      </button>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form type="add" amount={0} date={new Date()} />
        </Modal>
      )}
    </section>
  );
};

export default TodayWaterList;
