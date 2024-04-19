import logo from "./logo.svg";
import Checkbox from "./Checkbox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Checkbox label="Checkbox 1" />
      </header>
    </div>
  );
}

export default App;
