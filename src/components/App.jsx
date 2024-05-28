import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;