import useStats from "./useStats";
import { useState } from "react";
import Stats from "./Stats";
import React from "react";

export default function CountrySelector() {
  const countries = useStats("https://api.covid19api.com/countries");

  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (!countries) return <p>Loading...</p>;

  return (
    <div>
      <div className="statBlock">
        <h3>Currently Showing {selectedCountry}</h3>

        {Object.entries(countries.countries).map(([country, key]) => (
    
            selected={selectedCountry === countries.ISO2[key]}
            key={key}
            value={countries.ISO2[key]}
          
            {country}
        
        ))}

        <Stats
          url={`https://api.covid19api.com/countries/${selectedCountry}`}
        ></Stats>
      </div>
    </div>
  );
}
