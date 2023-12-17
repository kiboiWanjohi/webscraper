import React, { useState, useEffect } from "react";

const App = () => {
  const [deals, setDeals] = useState(null);
  const getDeals = async () => {
    try {
      const response = await fetch("https:localhost:8000/deals", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDeals(), [];
  });
  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
      </nav>
      <div className="">
        <h2>Best Deals of the Day</h2>
        <div className="feed">
          {deal?.map((deal = <Card key={deals.pos} item={deal} />))}
        </div>
      </div>
    </div>
  );
};

export default App;
