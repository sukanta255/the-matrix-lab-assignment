import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const TokenAddress = () => {
  const [data, setData] = useState([]);

  const fetchTokenData = async () => {
    const url =
      "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.pairs);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    fetchTokenData();
  }, []);

  return (
    <div className="container">
      <div className="search-header">Token Search Results</div>
      <div className="card-div">
        {data &&
          data.length > 0 &&
          data.map((token, i) => <Card key={i} data={token} />)}
      </div>
    </div>
  );
};
export default TokenAddress;
