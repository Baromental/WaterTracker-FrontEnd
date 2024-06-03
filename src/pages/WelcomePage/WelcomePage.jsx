import React from 'react';
import { NavLink } from 'react-router-dom';
import BgSectionWelcomePage from '../../components/BgSectionWelcomePage/BgSectionWelcomePage.jsx'
import s from './WelcomePage.module.css';
import sprite from '../../img/icons/sprite.svg';

const WelcomePage = () => {
    return (
        <BgSectionWelcomePage>
            <div className={s.welcomePageSection}>
            <h1 className={s.title}>Water consumption tracker</h1>
            <div className={s.welcomePageContainer}>
                <div className={s.buttonContainer}>
                    <h2 className={s.subtitle}>Record daily water intake and track</h2>
                    <div>
                        <span className={s.listButtonTitle}>Tracker Benefits</span>
                        <ul className={s.listButton}>
                            <li className={s.itemListButton}>
                                <svg width="40" height="40">
                                    <use  href={`${sprite}#icon-calendar`} />
                                </svg>
                                Habit drive
                            </li>
                            <li className={s.itemListButton}>
                                <svg width="40" height="40">
                                    <use  href={`${sprite}#icon-analytics`} />
                                </svg>
                                View statistics
                            </li>
                            <li className={s.itemListButton}>
                                <svg width="40" height="40">
                                    <use href={`${sprite}#icon-screw`} />
                                </svg>
                                Personal rate setting
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/signup" className={s.button}>Try tracker</NavLink>
                </div>
                <div className={s.listContainer}>
                    <ul className={s.list}>
                        <span className={s.listTitle}>Why drink water</span>
                        <li className={s.itemList}>Supply of nutrients to all organs</li>
                        <li className={s.itemList}>Providing oxygen to the lungs</li>
                        <li className={s.itemList}>Maintaining the work of the heart</li>
                        <li className={s.itemList}>Release of processed substances</li>
                        <li className={s.itemList}>Ensuring the stability of the internal environment</li>
                        <li className={s.itemList}>Maintaining within the normal temperature</li>
                        <li className={s.itemList}>Maintaining an immune system capable of resisting disease</li>
                    </ul>
                </div>
            </div>
            </div>
        </BgSectionWelcomePage>
    );
};

export default WelcomePage;
