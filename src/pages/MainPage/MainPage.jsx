import React from 'react';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import { BgSectionHome } from '../../components/BgSectionHome/BgSectionHome';

const MainPage = () => {
  return (
    <BgSectionHome>
      <TodayWaterList />
    </BgSectionHome>
  );
};

export default MainPage;
