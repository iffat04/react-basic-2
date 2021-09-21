import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
     <Counter></Counter> 


     <ExternalUser></ExternalUser>


    </div>
  );
}

//api call er function

//data show
function ShowUser(props){
  return(
    <div className="user">
    <h1>{props.name}</h1>
    <h1>{props.id}</h1>
    <p>{props.address.city}</p>
    <p>{props.phone}</p>
    </div>

  );
}

//data fetch
function ExternalUser(){
  const [users,setUsers] = useState([])
  console.log(users)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data))
  },[]);
 return(
 <div>
   <h1>External User</h1>
   <h4>number of user: {users.length}</h4>
  { users.map(user=> ShowUser(user))}
  {users.map(user=> <ShowUser name={user.name} id={user.id} address={user.address}  ></ShowUser>)}
 </div>
 );

}




//counter function
function Counter(){
 const [count, setCount] = useState(0)
 const handleIncrease = ()=>{
   const newCount = count +1;
   setCount(newCount);
 }

 const handleDecrease = ()=>{
   if(count===0){
     return;
   }
  setCount(count-1);
}
  return(
    <div>
      <h1>Count :{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}


/*

const products=[
    {name:'laptop', price:'10000'},
    {name:'mobile',price:'100'}
  ];

 
      {
      products.map((product) =>{
      
      <DisplayProduct pName={product.name} price={product.price}></DisplayProduct>
      <h1>{product.price}</h1>

      }
      );
      }

      <div className="product">
      <h1>productname : {props.pName}</h1>
      <h2>price: {props.price}</h2>
    </div>
*/      
export default App;


