import { useState, useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';


const API_KEY = "c40dd10313559f62615f884eec495fa8";
const BASE_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App

