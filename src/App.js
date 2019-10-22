import React from 'react';
import { Provider } from 'react-redux';
import Routes from './components/routes/routes';
import Navbar from './components/navbar/navbar';
import { store } from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
