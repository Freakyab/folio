import React, { useEffect, useState } from 'react';
import "../Body/App.css";

export default function Api() {
  const [displayData, setDisplayData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-dusky-pi.vercel.app/api/mongo');
      const data = await response.json();
      const value = data.map((e) =>  (e.name));
      console.log(data);
      setDisplayData(value);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="main-data">{displayData}</div>
    </div>
  );
}
