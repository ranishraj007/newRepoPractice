import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data", error));
  }, []);
  // console.log(data)
  console.log(data)

  return (
    <div>
      {data.map((item, index) => (
        <h3 key={index}>{item.completed ? item.title : "" }</h3>
      ))}
      this is home page
      <ul>
        <li>ssdf</li>
        <li>ssdf</li>
      </ul>
    </div>
  );
};

export default Home;
