import React from 'react';

import s from './BgSection.module.css';

export const BgSection = ({ children }) => {
  return (
    <section className={s.section}>
      <div className={s.container}>{children}</div>
    </section>
  );
};
