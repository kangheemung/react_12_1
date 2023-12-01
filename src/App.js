import logo from './logo.svg';
import './App.css';
import StateTutorial from './components/StateTutorial';
import Input from './components/Input';
import ReducerRutolrial from './components/ReducerRutolrial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateTutorial />
        <Input />
        
        <ReducerRutolrial />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
