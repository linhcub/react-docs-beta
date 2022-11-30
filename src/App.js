import './App.css';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react'

let isLoggedIn = true

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      {isLoggedIn && <Profile />}
      <ShoppingList />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
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
