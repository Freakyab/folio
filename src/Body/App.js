import "./App.css";
// import React, { useEffect, useState } from "react";
import  Api from "../api/api";
function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const apiData = await Api();
  //     setData(apiData);
  //   })();
  // }, []);

  return (
    <>
      <div className="bg">
      </div>
      <div className="main-div ">
        <div className="bg-style "></div>
        {/* <p className="main-data ">{data}</p> */}
        <Api/>
      </div>
    </>
  );
}

export default App;
