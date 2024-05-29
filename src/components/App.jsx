import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import WelcomePage from '../pages/WelcomePage/WelcomePage'


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<WelcomePage/>} ></Route>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;