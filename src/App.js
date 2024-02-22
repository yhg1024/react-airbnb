import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import './reset.css';
import './App.css';
import Detail from "./room/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;