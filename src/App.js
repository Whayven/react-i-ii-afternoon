import React from "react";

import "./App.css";

import Header from "./Components/Header";
import Container from "./Components/DataContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="person-info-box">
        <Container />
      </div>
    </div>
  );
}

export default App;
