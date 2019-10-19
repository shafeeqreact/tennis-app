import React from 'react';
import Routes from './components/routes/routes';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
