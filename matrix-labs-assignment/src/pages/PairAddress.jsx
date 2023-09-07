import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const PairAddress = () => {
  const [data, setData] = useState([]);

  const fetchPairData = async () => {
    const url =
      "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.pairs);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    fetchPairData();
  }, []);

  return (
    <div className="container">
      <div className="search-header">Pair Search Results</div>
      <div className="card-div">
        {data &&
          data.length > 0 &&
          data.map((token, i) => <Card key={i} data={token} />)}
      </div>
    </div>
  );
};
export default PairAddress;
