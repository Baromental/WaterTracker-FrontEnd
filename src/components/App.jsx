import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SignupPage from '../pages/SignupSigninPage/SignupPage';
import SigninPage from '../pages/SignupSigninPage/SigninPage';

import 'modern-normalize';
import MainPage from '../pages/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<WelcomePage />} />
          <Route path="water-tracker" element={<MainPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
