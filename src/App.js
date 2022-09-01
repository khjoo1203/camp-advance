import "./App.css";
import React from "react";
import Main from "./page/Main";
import Detail from "./page/Detail";
import { Routes, Route } from "react-router-dom";
import Pagenation from "./page/Pagenation";
import InfiniteScroll from "./page/InfiniteScroll";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
