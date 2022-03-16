import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(pros) {

  return (
    <div className="App">
     <Counter></Counter>
    </div>
  );
}
function Counter(pros){
  const [count,setCount]=useState(3);
  const increaseCount=()=>setCount(count+1)
  const decreaseCount=()=>setCount(count-1)
  // const newCount=count+1;
  // setCount(newCount)}
 

  return (
    <div className='counter-style'>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increasing</button>
      <button onClick={decreaseCount}>Decreasing</button>
      
    </div>
  )
}

export default App;
