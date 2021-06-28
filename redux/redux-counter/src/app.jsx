import React, { useState } from 'react';
import AddNumberRoot from './components/add/addNumberRoot';
import DisplayNumberRoot from './components/display/displayNumberRoot';
import './app.css';

function App() {

  //const [test, setState] = useState({ test: 0 });
  const [number, setNumber] = useState(0);

  const handleAdd = (numberParam) => {
    setNumber(number + numberParam);
  }

  return (
    <div >
      <h1>Root</h1>
      <AddNumberRoot onAdd={handleAdd} />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;
