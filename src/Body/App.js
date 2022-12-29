import "./App.css";
// import React, { useEffect, useState } from "react";
import  Api from "../api/api";
import Type from "../components/Typing/Typing";
function App() {
  return (
    <>
      <div className="bg">
      </div>
      <div className="main-div ">
      <div className="about">About</div>
        <div className="cover"></div>
        <div className="bg-style "></div>
        <Type/>
        <Api/>
      </div>
    </>
  );
}

export default App;
