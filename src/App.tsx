import React from 'react';
import './App.css';
import Firestore  from './FireStore';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Firestore/>
    </div>
  );
}

export default App;
