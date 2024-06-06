import React from 'react';
import s from './CalendarItem.module.css';

const CalendarItem = ({ note, index }) => {
  return (
    <li className={s.calendar_item}>
      <p
        className={`${s.date} ${
          parseInt(note.percent) < 100 ? s.orange_border : ''
        }`}
      >
        {index + 1}
      </p>
      <p className={s.percent}>{note.percent}</p>
    </li>
  );
};

export default CalendarItem;
