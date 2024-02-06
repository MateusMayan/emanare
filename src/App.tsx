import React from 'react';
import './App.css';
import Header from './Components/Header';
import { UserStorage } from './UserContext';
import NavBarProdutos from './Components/NavBarProdutos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromoBar from './Components/PromoBar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <PromoBar />
          <Header />
          <NavBarProdutos />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
