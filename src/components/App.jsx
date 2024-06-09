import React, { useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import Layout from '../components/Layout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SignupPage from '../pages/SignupSigninPage/SignupPage';
import SigninPage from '../pages/SignupSigninPage/SigninPage';
import MainPage from '../pages/MainPage/MainPage';
import PrivateRoutes from '../routes/PrivateRoutes';
import PublicRoutes from '../routes/PublicRoutes';
import 'modern-normalize';
import { selectIsLoading } from '../redux/loadingSlice';
import Loader from './Loader/Loader';
import { selectIsRefresh } from '../redux/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="signup"
              element={
                <PublicRoutes>
                  <SignupPage />
                </PublicRoutes>
              }
            />
            <Route
              path="signin"
              element={
                <PublicRoutes>
                  <SigninPage />
                </PublicRoutes>
              }
            />
            <Route
              path="home"
              element={
                <PrivateRoutes>
                  <MainPage />
                </PrivateRoutes>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
