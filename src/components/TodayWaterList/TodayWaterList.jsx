import React from 'react';
import { useModal } from '../../hooks/useModal';
import WaterTodayItem from '../TodayWaterList/TodayWaterItem/TodayWaterItem';
import s from './TodayWaterList.module.css';
import { FiPlus } from 'react-icons/fi';
import { CustomScroll } from 'react-custom-scroll';
import Modal from '../Modal/Modal';
import Form from '../Form/AddEditDeleteWaterForm/Form';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../redux/water/waterSlice';

const TodayWaterList = () => {
  const { isOpen, toggle } = useModal();
  const notes = useSelector(selectNotes);

  return (
    <section className={s.today_section}>
      <h2 className={s.section_title}>Today</h2>
      <div className={s.custom_scroll_container}>
        <CustomScroll
          heightRelativeToParent="100%"
          handleClass={s.rcs_inner_handle}
        >
          {notes.length > 0 && (
            <ul className={s.list}>
              {notes.map(note => (
                <WaterTodayItem key={note._id} note={note} />
              ))}
            </ul>
          )}
        </CustomScroll>
      </div>
      <button className={s.add_btn} onClick={toggle}>
        <FiPlus className={s.icon_plus} />
        Add water
      </button>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Form type="add" amount={0} date={new Date()} closeModal={toggle} />
        </Modal>
      )}
    </section>
  );
};

export default TodayWaterList;
