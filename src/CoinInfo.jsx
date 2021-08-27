import React from "react";
import { Link } from "react-router-dom";

function CoinInfo() {
  const data = JSON.parse(window.localStorage.getItem("coinData"));

  // TO DO -> CREATE CARDS TO DISPLAY IMPORTANT COIN INFORMATION

  return (
    <div>
      <h1>{data.name}</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default CoinInfo;
