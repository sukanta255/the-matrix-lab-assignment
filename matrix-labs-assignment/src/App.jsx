import React, { useEffect, useState } from "react";
import "./App.css";
import nftifyLogo from "/nftifyLogo.svg";
import logoHamberger from "/logoHamberger.svg";
import tokenLogo from "/tokenLogo.svg";
import pairLogo from "/pairLogo.svg";
import searchLogo from "/searchLogo.svg";
import PairAddress from "./pages/PairAddress";
import TokenAddress from "./pages/TokenAddress";
import Sidebar from "./components/Sidebar";
import { useWeb3Modal } from "@web3modal/react";
import Card from "./components/Card";

const App = () => {
  const { open, close } = useWeb3Modal();
  const [page, setPage] = useState("token");
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    const url = `https://api.dexscreener.com/latest/dex/search/?q=${searchText}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("fetchData data: ", data);

      data.pairs.sort((a, b) => {
        if (+a.priceNative > +b.priceNative) return -1;
        if (+a.priceNative < +b.priceNative) return 1;
        return 0;
      });

      setSearchData(data.pairs.slice(0, 10));
      console.log("sorted searched data price by descending order", data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    if (searchText.length) {
      fetchData();
    }
  }, [searchText]);

  return (
    <div>
      <div className="bg-pic">
        <div className="bg-pic-next"></div>
      </div>
      <div className="app">
        <Sidebar page={page} setPage={setPage} />
        <main>
          <div className="navbar">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <img src={searchLogo} alt="" />
            </div>
            <button className="btn-connect" onClick={() => open()}>
              Connect
            </button>
          </div>
          <div className="top-mobile">
            <div className="upper-nav">
              <div className="logo">
                <label>
                  <input type="checkbox" className="hamberger-menu" />
                  <img src={logoHamberger} alt="logoHamberger-icons" />
                </label>
                <img src={nftifyLogo} alt="nftifyLogo-image" />
              </div>
              <button className="btn-connect" onClick={() => open()}>
                Connect
              </button>
            </div>
            <ul className="menu-list">
              <li
                onClick={() => setPage("token")}
                className={`menu-item ${page === "token" ? "active" : ""}`}
              >
                <img src={tokenLogo} alt="" />
                <span>Token Address</span>
              </li>
              <li
                onClick={() => setPage("pair")}
                className={`menu-item ${page === "pair" ? "active" : ""}`}
              >
                <img src={pairLogo} alt="" />
                <span>Pair Address</span>
              </li>
            </ul>
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <img src={searchLogo} alt="searchLogo-icons" />
            </div>
          </div>
          {searchText.length ? (
            <div className="container">
              <div className="search-header">Search Results</div>
              <div className="card-div">
                {searchData &&
                  searchData.length > 0 &&
                  searchData.map((token, i) => <Card key={i} data={token} />)}
              </div>
            </div>
          ) : page === "token" ? (
            <TokenAddress />
          ) : (
            <PairAddress />
          )}
        </main>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
