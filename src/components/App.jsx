import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import TodayWaterList from './TodayWaterList/TodayWaterList';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/water" element={<TodayWaterList />}></Route>
      </Routes>
    </div>
  );
};

export default App;
