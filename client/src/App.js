import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
