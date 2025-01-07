import React from "react";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="container border px-4 mail_container">

        <div className="logo">
        <img
          src="../images/Hotchpotz-logo-13.png"
          alt="img not found"
          className="brand_logo"
        />

        </div>
        {/* <h1 className="text-center">Mail Sender</h1> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
