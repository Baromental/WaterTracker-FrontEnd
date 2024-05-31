import React, { useEffect } from 'react';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import { useDispatch } from 'react-redux';
import { fetchWaterDataTodayThunk } from '../../redux/water/operations';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaterDataTodayThunk());
  }, [dispatch]);

  return <TodayWaterList />;
};

export default MainPage;
