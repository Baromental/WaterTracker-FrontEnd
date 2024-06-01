import React from 'react';

import s from './BgSectionHome.module.css';

export const BgSectionHome = ({ children }) => {
  return (
    <section className={s.section}>
      <div className={s.container}>{children}</div>
    </section>
  );
};
