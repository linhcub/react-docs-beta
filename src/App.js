import './App.css';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import FilterableProductTable from './components/FilterableProductTable';
import { useState } from 'react'

let isLoggedIn = true

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <div className="App" >
      {isLoggedIn && <Profile />}
      {/* <ShoppingList />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <FilterableProductTable products={PRODUCTS} /> */}
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Click {count} times
    </button>
  );
}

export default App;
