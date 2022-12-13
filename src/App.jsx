import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import GlobalState from "./Context/GlobalState";
import Home from "./Home";

function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
