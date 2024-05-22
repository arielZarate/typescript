import React from "react";
import "./App.css";

//==========importaciones======================================

import Contador from "./Components/Contador";
import User from "./Components/User";
function App(): JSX.Element {
  return (
    <>
      <div className="App">
        {/*  <Contador /> */}

        <User />
      </div>
    </>
  );
}

export default App;
