import React, { useState, useEffect } from "react";
import axios from "axios";
import Tulokset from './components/Tulokset'
import Haku from './components/Haku'

const App = () => {
  const [maat, setMaat] = useState([]);
  const [haku, setHaku] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setMaat(res.data);
    });
  }, []);

  const handleHaku = (e) => {
    setHaku(e.target.value);
  };

  const showCountry = (name) => {
    setHaku(name);
  }

  const results = maat.filter((maa) => maa.name.common.toLowerCase().includes(haku.toLowerCase()));

  return (
    <>
      <Haku haku={haku} handleHaku={handleHaku} />
      <Tulokset results={results} showCountry={showCountry} />
    </>
  );
};

export default App;
