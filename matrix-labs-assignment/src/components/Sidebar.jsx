import React from "react";
import "../style/Sidebar.css";
import VectorLogo from "/VectorLogo.svg";
import tokenLogo from "/tokenLogo.svg";
import pairLogo from "/pairLogo.svg";
import AllIcons from "./AllIcons";
import nftifyLogo from "/nftifyLogo.svg";

const Sidebar = ({ page, setPage }) => {
  return (
    <section className="top-sidebar">
      <header className="header-sidebar">
        <div className="logo">
          <img src={VectorLogo} alt="" />
          <img src={nftifyLogo} alt="" />
        </div>
      </header>
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

      <div className="social-icon-group">
        <AllIcons Icon={"facebookLogo.svg"} />
        <AllIcons Icon={"linkedinLogo.svg"} />
        <AllIcons Icon={"twitterLogo.svg"} />
      </div>
    </section>
  );
};
export default Sidebar;
