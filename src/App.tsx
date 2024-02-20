import React from 'react';
import './App.css';
import Header from './Components/TopPage/Header';
import { UserStorage } from './contexts/UserContext';
import NavBarProdutos from './Components/TopPage/NavBarProdutos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromoBar from './Components/TopPage/PromoBar';
import Home from './Home/Home';
import ButtonWhatsapp from './Components/Buttons/ButtonWhatsapp';
import ButtonScrollTop from './Components/Buttons/ButtonScrollTop';
import { CartProvider } from './contexts/CartContext';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <UserStorage>
            <ButtonWhatsapp />
            <ButtonScrollTop />
            <PromoBar />
            <Header />
            <NavBarProdutos />
            <main className="appBody">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
