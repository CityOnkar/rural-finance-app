import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://f8l599zj37.execute-api.us-east-1.amazonaws.com/loans")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Rural Finance Dashboard</h1>
      <h2>Loans:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
