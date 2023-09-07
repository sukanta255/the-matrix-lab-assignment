import React from "react";
import "../style/Card.css";
import dollarLogo from "/dollarLogo.svg";
import token_symbol from "/material-symbols_token-outline.svg";
import alert from "/material-symbols_info-outline.svg";

const Card = ({ data }) => {
  const getTime = (time) => {
    return new Date(time).toUTCString();
  };

  return (
    <div className="every-card-row">
      <div className="each-card">
        <div className="heading-all-card">Basic Info</div>
        <div className="only-row">
          <span>Pair Created At</span>
          <span>{getTime(data.pairCreatedAt)}</span>
        </div>
        <div className="only-row">
          <span>Symbol</span>
          <span>{data.baseToken.symbol}</span>
        </div>
        <div className="only-row">
          <span>Dex ID</span>
          <span>{data.dexId}</span>
        </div>
        <div className="only-row">
          <span>Pair Address</span>
          <span>{data.pairAddress.slice(0, 10)}</span>
        </div>
        <div className="card-icon">
          <img src={alert} alt="" />
        </div>
      </div>
      <div className="each-card">
        <div className="heading-all-card">Base Token</div>
        <div className="only-row">
          <span>Name</span>
          <span>{data.baseToken.name}</span>
        </div>
        <div className="only-row">
          <span>Symbol</span>
          <span>{data.baseToken.symbol}</span>
        </div>
        <div className="only-row">
          <span>Address</span>
          <span>{data.baseToken.address.slice(0, 10)}</span>
        </div>

        <div className="card-icon">
          <img src={token_symbol} alt="" />
        </div>
      </div>
      <div className="each-card">
        <div className="heading-all-card">Quote Token</div>
        <div className="only-row">
          <span>Name</span>
          <span>{data.quoteToken.name}</span>
        </div>
        <div className="only-row">
          <span>Symbol</span>
          <span>{data.quoteToken.symbol}</span>
        </div>
        <div className="only-row">
          <span>Address</span>
          <span>{data.quoteToken.address.slice(0, 10)}</span>
        </div>
        <div className="card-icon">
          <img src={token_symbol} alt="" />
        </div>
      </div>
      <div className="each-card">
        <div className="heading-all-card">Price</div>
        <div className="only-row">
          <span>Price Native</span>
          <span>{data.priceNative}</span>
        </div>
        <div className="only-row">
          <span>Price USD</span>
          <span>{data.priceUsd}</span>
        </div>
        <div className="card-icon">
          <img src={dollarLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
