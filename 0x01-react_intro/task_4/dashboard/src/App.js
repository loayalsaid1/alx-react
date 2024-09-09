import { getFooterCopy, getFullYear } from './utils';
import logo from './holberton_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      
        {/* The login form */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="button">Ok</button>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        
      </div>
    </div>
  );
}

export default App;
