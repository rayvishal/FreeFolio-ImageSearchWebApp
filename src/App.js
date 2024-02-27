import React from "react";
import Header from "./Components/Header.jsx";
// import Topics from "./Components/Topics";
import Home from "./Components/Home.jsx";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Advertise from "./Components/Advertise.jsx";
import FreeFolioPlus from "./Components/FreeFolioPlus.jsx";
import About from "./Components/About.jsx";
import Stats from "./Components/Stats.jsx";
import SingleTopic from "./Components/SingleTopic.jsx";
import Collections from "./Components/Collections.jsx";
import SingleCollection from "./Components/SingleCollection.jsx";

import { createContext } from "react";
export const searchData = createContext();

// end
function App() {
  const [headerSearchValue, setheaderSearchValue] = useState("mumbai");
  return (
    <BrowserRouter>
      <Header setheaderSearchValue={setheaderSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <searchData.Provider
              value={[headerSearchValue, setheaderSearchValue]}
              // value={headerSearchValue}
            >
              <Home />
            </searchData.Provider>
          }
        ></Route>

        <Route path="/advertise" element={<Advertise />}></Route>
        <Route path="/plus" element={<FreeFolioPlus />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/topics/:id" element={<SingleTopic />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
        <Route
          path="/collections/:id/:title"
          element={<SingleCollection />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
