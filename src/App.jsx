import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

// function inIframe() {
//   try {
//     return window.self !== window.top;
//   } catch (e) {
//     return true;
//   }
// }

function App() {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "iframe_embedded",
        referrer: document.location.href,
      },
    });
  });
  return (
    <div className="App">
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
