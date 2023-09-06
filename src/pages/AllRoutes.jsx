import React from "react";
import { Routes, Route } from "react-router-dom";
import PairAddress from "./PairAddress";
import TokenAddress from "./TokenAddress";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TokenAddress />} />
      <Route path="/pairaddress" element={<PairAddress />} />
    </Routes>
  );
};
