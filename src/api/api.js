import React, { useEffect, useState } from 'react';
import "../Body/App.css";
// E:\webfolio\folio\src\Body\App.css
export default function Api() {
  const [displayData, setDisplayData] = useState("");
  const api = 'https://api-dusky-pi.vercel.app/api/mongo';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        setDisplayData(responseData);
      });
  }, [displayData]);

  return (
    <div>
      <div className="main-data">{displayData}</div>
    </div>

    // <div>
    //   <pre>{JSON.stringify(displayData, null, 2)}</pre>
    // </div>
  );
}
