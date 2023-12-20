import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
const App = () => {
  const [deals, setDeals] = useState([]);
  const getDeals = async () => {
    try {
      const response = await fetch("https:localhost:8000/deals", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getDeals();
  }, []);
  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
      </nav>
      <div className="">
        <h2>Best Deals of the Day</h2>
        <div className="feed">
          {deals?.map((deal) => (
            <Card key={deals.pos} item={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
