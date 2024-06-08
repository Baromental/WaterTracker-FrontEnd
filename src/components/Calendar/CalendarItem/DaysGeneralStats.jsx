import React, { forwardRef, useEffect } from 'react';
import s from './DaysGeneralStats.module.css';

const DaysGeneralStats = forwardRef(({ note }, ref) => {
  const { date, waterRate, percent, consumptionCount } = note;

  return (
    <ul className={s.stats_list} ref={ref}>
      <li className={s.date}>{date}</li>
      <li className={s.stat}>
        Daily norma: <span className={s.accent}>{waterRate}</span>
      </li>
      <li className={s.stat}>
        Fulfillment of the daily norm:{' '}
        <span className={s.accent}>{percent}</span>
      </li>
      <li className={s.stat}>
        How many servings of water:{' '}
        <span className={s.accent}>{consumptionCount}</span>
      </li>
    </ul>
  );
});

export default DaysGeneralStats;
