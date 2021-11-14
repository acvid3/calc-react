import Button from './components/Button/Button';
import Display from './components/Display/Display';
import {Buttons} from './data/data';
import {plus, minus, multiply, items} from './utils/calc'
import './index.css';
import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [value, setValue] = useState('');

  const concat = (symbol) => {
    setValue(value + symbol);
  }

  const calc = symbol => {
    setValue(value + symbol)
  }

  const onClick = (symbol) => {
    switch (symbol) {
      case 'c': setValue(''); break;
      case '+':  setValue(plus()); break;
      case '-':  minus(); break;
      case '*':  multiply(); break;
      case '/':  items(); break;
      default: calc(); break;
    }
  }


  return (
    <div className="App">
      <Display word={value} />

      <div>
        {
          Buttons.map(button => <Button 
            label={button.symbol} 
            style={button.style}
            onClick={onClick} 
          />)
        }
      </div>
    </div>
  );
}

export default App;
