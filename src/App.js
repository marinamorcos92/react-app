import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/marinamorcos92/react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source code
        </a>
      </header>
    </div>
  );
}

export default App;
