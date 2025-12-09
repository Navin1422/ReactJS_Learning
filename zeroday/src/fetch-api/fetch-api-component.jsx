import React, { useState } from 'react';
import axios from 'axios';

const FetchApiComponent = () => {

  const [data, setData] = useState([]);

  const fun1 = async () => {
    try {
      const response = await axios("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <h1>API Fetch</h1>

      {data.length === 0 ? (
        <>
          <h2>No data available</h2>
          <button onClick={fun1}>Fetch Data</button>
        </>
      ) : (
        <div>
          <h2>Fetched Users:</h2>
          {data.map((item) => (
            <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
              <h3>{item.name}</h3>
              <p>Email: {item.email}</p>
              <p>Username: {item.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApiComponent;
