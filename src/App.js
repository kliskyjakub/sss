import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div>
      <button onClick={() => setWalletConnected(true)}>Connect wallet</button>
      {walletConnected && <div>Video is here!</div>}
    </div>
  );
}

export default App;
