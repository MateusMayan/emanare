import React from 'react';
import './App.css';
import Header from './Components/Header';
import {UserStorage}  from './UserContext';
import NavBarProdutos from './Components/NavBarProdutos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromoBar from './Components/PromoBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <PromoBar/>
      <Header/>
      <NavBarProdutos/>
     </UserStorage>
     </BrowserRouter>
    </div>
  );
}

export default App;
