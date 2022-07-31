import logo from './logo.svg';
import './App.css';
import resume_pdf from './assets/files/Resume.pdf'

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
          href={resume_pdf}
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
