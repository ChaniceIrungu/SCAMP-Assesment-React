import useStats from "./useStats";
import React from "react";

export default function Stats() {
  const stats = useStats("https://api.covid19api.com/summary");
  if (!stats) return <p>Loading...</p>;
  console.log(stats);
  return (
    <div>
      <div className="statBlock">
        <h3>Confirmed, deaths, recovered</h3>
        <span>{stats.Global.value}</span>
      </div>
      <div className="statBlock">
        <h3>Confirmed, deaths, recovered</h3>
        <span>{stats.Countries.value}</span>
      </div>
    </div>
  );
}
