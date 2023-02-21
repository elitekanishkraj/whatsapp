import React from "react";
import { useEffect } from "react";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import GlobalState from "./Context/GlobalState";
import Home from "./Home";
import Login from "./Login";
// import { Navigate } from "react-router-dom";

function App() {


  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Home />}  />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
