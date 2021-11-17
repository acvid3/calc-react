import React from 'react';
import ParentGroup from './components/ParentGroup/ParentGroup';
import './index.css';
import { CalcProvider } from './utils/calc';

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <ParentGroup />
      </CalcProvider>
    </div>
  );
}

export default App;
