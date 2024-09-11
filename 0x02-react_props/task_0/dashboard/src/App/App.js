import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import logo from '../assets/holberton_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      
        {/* The login form */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="button">Ok</button>
      </div>

    </div>
  );
}

export default App;
