import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount] = useState(['1'])
  const minus = () =>{
  setCount([...count,Math.random()])
  }
  const plus = () =>{
  setCount([...count,Math.random()])
  }
  return (
    <div className="App">
 <button onClick={minus}>minus</button>
      <ul>
        {count.map(el => <li key={el}>{el}</li>)}
      </ul>
      <button onClick={plus}>plus</button>
    </div>
  );
}

export default App;
