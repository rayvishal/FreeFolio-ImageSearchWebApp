import React from "react";
import Header from "./Components/Header";
// import Topics from "./Components/Topics";
import Home from "./Components/Home";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Advertise from "./Components/Advertise";
import FreeFolioPlus from "./Components/FreeFolioPlus";
import About from "./Components/About";
import Stats from "./Components/Stats";
import SingleTopic from "./Components/SingleTopic";

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
        <Route path="/advertise" element={<Advertise />}></Route>
        <Route path="/plus" element={<FreeFolioPlus />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/topics/:id" element={<SingleTopic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
