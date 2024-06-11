import React, { useEffect, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import {
  selectIsLoggedIn,
  selectIsRefresh,
  selectToken,
} from '../redux/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isRefreshing = useSelector(selectIsRefresh);
  const loggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn, navigate]);

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
