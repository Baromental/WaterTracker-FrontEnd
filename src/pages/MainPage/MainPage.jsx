import React, { useEffect } from 'react';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import { BgSectionHome } from '../../components/BgSectionHome/BgSectionHome';
import { useDispatch } from 'react-redux';
import {
  fetchWaterDataMonthThunk,
  fetchWaterDataTodayThunk,
} from '../../redux/water/operations';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import s from './MainPage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import Calendar from '../../components/Calendar/Calendar';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaterDataTodayThunk());
  }, [dispatch]);

  return (
    <BgSectionHome>
      <div className={s.bottle_wrapper}>
        <DailyNorma />
        <WaterRatioPanel />
      </div>
      <div className={s.today_wrapper}>
        <TodayWaterList />
        <Calendar />
      </div>
    </BgSectionHome>
  );
};

export default MainPage;
