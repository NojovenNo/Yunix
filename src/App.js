import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/auth/index";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePag from "./components/home/index"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePag />}></Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
