import React from "react";
import Header from "./Components/Header";
import Topics from "./Components/Topics";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Topics />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
