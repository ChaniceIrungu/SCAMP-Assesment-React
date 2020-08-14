import React from "react";
import useStats from "./useStats";

import Stats from "./Stats";
import CountrySelector from "./CountrySelector";

export default function Covid() {
  return (
    <div>
      <Stats></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}
