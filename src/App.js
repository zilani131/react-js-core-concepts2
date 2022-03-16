import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(pros) {

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  // useState default value has been given an empty array
  // just remember upcoming class we will know what happens
  const [user,setUser]=useState([]);
  // without second bracket in useEffect ,
  // render will not occur and it will run infinite loop
  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(user=>setUser(user))
  },[])
  return (
    <div>
     
      {user.map(users=> <Person name={users.name} email={users.email}></Person>) }

    </div>
  )
}
function Person(props){
  console.log(props)
  return (
    <div style={{border:"2px solid blue",borderRadius:"20px",backgroundColor:"lightblue",margin:"20px auto" ,width:"50%"}}>
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
    </div>
  )
}
// function Counter(pros){
//   const [count,setCount]=useState(3);
//   const increaseCount=()=>setCount(count+1)
//   const decreaseCount=()=>setCount(count-1)
//   // const newCount=count+1;
//   // setCount(newCount)}
 

//   return (
//     <div className='counter-style'>
//       <h1>Counter: {count}</h1>
//       <button onClick={increaseCount}>Increasing</button>
//       <button onClick={decreaseCount}>Decreasing</button>
      
//     </div>
//   )
// }

export default App;
