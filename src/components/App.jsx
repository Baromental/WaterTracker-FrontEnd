import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import WelcomePage from '../pages/WelcomePage/WelcomePage';

import Header from './Header/Header';
import { AuthForm } from './AuthForm/AuthForm';

import 'modern-normalize';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<AuthForm formType={'register'} />} />
        <Route path="/signin" element={<AuthForm formType={'login'} />} />

        <Route path="/" element={<Header />}>
          <Route index element={<WelcomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
