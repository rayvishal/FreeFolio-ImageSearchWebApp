import React from "react";
import Header from "./Components/Header";
// import Topics from "./Components/Topics";
import Home from "./Components/Home";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [headerSearchValue, setheaderSearchValue] = useState("latest");
  // console.log("hell");
  return (
    <BrowserRouter>
      <Header setheaderSearchValue={setheaderSearchValue} />
      <Routes>
        <Route
          path="/"
          element={<Home headerSearchValue={headerSearchValue} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
