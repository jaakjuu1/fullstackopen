import React from "react";
import Maa from './Maa'
import Weather from "./Weathrer";

const Tulokset = ({results, showCountry}) => {

  return (
    <div>
      {results.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : results.length === 1 ? (
        results.map((maa) => (
          <>
            <Maa nimi={maa.name.common} lippu={maa.flags.png} />
            <div>
              <p>capital {maa.capital}</p>
              <p>population {maa.population}</p>
              <h3>Languages</h3>
              <ul>
                {Object.entries(maa.languages).map(([avain, arvo]) => (
                  <li key={avain}>{arvo}</li>
                ))}
              </ul>
              <Weather capital={maa.capital} />
            </div>
          </>
        ))
      ) : (
        results.map((maa) => (
          <div>
            <Maa nimi={maa.name.common} lippu={maa.flags.png} /> 
            <button onClick={() => showCountry(maa.name.common)}>show</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Tulokset;
