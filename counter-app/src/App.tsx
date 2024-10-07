import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCOunter from './Components/MainCOunter';

function App() {
  return (
    <div className="App">
        <MainCOunter countNumb ={ 0 }/>
    </div>
  );
}

export default App;
