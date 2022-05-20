import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount] = useState(['1'])
    const [name,setName] = useState('')
    const addToList = () => {
    setCount([...count,name])
    }
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
        <input value={name} onChange = {e => setName(e.target.value)}/>
        <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default App;
