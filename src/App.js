import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under construction using <code>React.js</code>
        </p>
        <a
          className="my-resume"
          href="/assets/files/Resume.pdf"
          target="_self"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </header>
    </div>
  );
}

export default App;
