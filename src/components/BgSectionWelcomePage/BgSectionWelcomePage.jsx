import React from 'react';
import s from './BgSectionWelcomePage.module.css';

const BgSectionWelcomePage = ({ children }) => {
  return (
    <section className={s.welcomePageBackground}>
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default BgSectionWelcomePage;
