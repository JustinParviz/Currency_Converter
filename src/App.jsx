import { useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  const [count, setCount] = useState(0)

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

