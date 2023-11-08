import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <meta name="description" content="your text goes here"/>
      <meta name="og:title" content=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
