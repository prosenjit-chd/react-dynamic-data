import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Mobile', price: 15000},
    {name: 'Laptop', price: 50000},
    {name: 'Watch', price: 3000},
    {name: 'Book', price: 1000},
    {name: 'SoundBox', price: 5000}
  ]
  return (
    <div className="App">
      <Counter> </Counter>
      <ExternalUser> </ExternalUser>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Table" price="4700"></Product>
    </div>
  );
}
function User(props) {
  return (
    <div className="style-all">
        <h2>User Name: {props.name}</h2>
        <h3>Email: {props.email}</h3>
    </div>
  )
}
function ExternalUser (){
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function Product(props){
  return (
    <div className="style-for-all">
      <h2>Product Name: {props.name}</h2>
      <h4>Product Price: {props.price}</h4>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div className="style-for">
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
export default App;
