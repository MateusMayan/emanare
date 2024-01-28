import React from 'react';
import './App.css';
import Header from './Components/Header';
import {UserStorage}  from './UserContext';

function App() {
  return (
    <div className="App">
      <UserStorage>
      <Header/>
     </UserStorage>
    </div>
  );
}

export default App;
