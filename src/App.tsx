import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Win from "./Win";

function App() {
   return (
      <Routes>
         
         <Route path="/" element={<Login />}></Route>
         <Route path="/head" element={<Header />}></Route>
         <Route path="/side" element={<Sidebar />}></Route>
         <Route path="/lay" element={<Win />}></Route>
      </Routes>
   );
}

export default App;
