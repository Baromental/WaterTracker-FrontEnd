import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotesPerMonth } from '../../redux/water/waterSlice';
import { fetchWaterDataMonthThunk } from '../../redux/water/operations';
import CalendarItem from './CalendarItem/CalendarItem';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';
import s from './Calendar.module.css';

const Calendar = () => {
  const dispatch = useDispatch();
  const notesPerMonth = useSelector(selectNotesPerMonth);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentMonth = useMemo(
    () => new Date().toLocaleString('default', { month: 'long' }).toLowerCase(),
    []
  );

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    dispatch(fetchWaterDataMonthThunk({ year, month }));
  }, [dispatch, year, month]);

  const handlePrevMonth = useCallback(() => {
    const date = new Date(
      year,
      new Date(`${month} 1, ${year}`).getMonth() - 1,
      1
    );
    setYear(date.getFullYear());
    setMonth(date.toLocaleString('default', { month: 'long' }).toLowerCase());
  }, [year, month]);

  const handleNextMonth = useCallback(() => {
    const date = new Date(
      year,
      new Date(`${month} 1, ${year}`).getMonth() + 1,
      1
    );
    setYear(date.getFullYear());
    setMonth(date.toLocaleString('default', { month: 'long' }).toLowerCase());
  }, [year, month]);

  const isCurrentMonthOrLater = useMemo(() => {
    return (
      (year === currentYear &&
        new Date(
          year,
          new Date(`${month} 1, ${year}`).getMonth(),
          1
        ).getMonth() >= new Date().getMonth()) ||
      year > currentYear
    );
  }, [year, month, currentYear]);

  return (
    <section className={s.water_month_section}>
      <div className={s.title_wrapper}>
        <h2 className={s.section_title}>Month</h2>
        <div className={s.pagination}>
          <button className={s.pagination_btn} onClick={handlePrevMonth}>
            <GoChevronLeft className={s.pagination_icon} />
          </button>
          <p className={s.date}>
            {`${month.charAt(0).toUpperCase()}${month.slice(1)}`}, {year}
          </p>
          <button
            className={s.pagination_btn}
            onClick={handleNextMonth}
            disabled={isCurrentMonthOrLater}
          >
            {!isCurrentMonthOrLater && (
              <GoChevronRight className={s.pagination_icon} />
            )}
          </button>
        </div>
      </div>
      <ul className={s.calendar_list}>
        {notesPerMonth.map((note, index) => (
          <CalendarItem key={index} note={note} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default Calendar;
