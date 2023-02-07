import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Main />
    </div>
  </div>
);

export default App;
