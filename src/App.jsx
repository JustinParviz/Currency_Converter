import { useState, useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';


const API_KEY = "c40dd10313559f62615f884eec495fa8";
const BASE_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
      />
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={currencyOptions}
      />
    </>
  );
}

export default App

