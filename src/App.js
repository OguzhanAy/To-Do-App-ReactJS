import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <span className="title">To Do List</span>
      <Todo count={setCount} />
      <span className="count">Items: {count} </span>
    </div>
  );
}

export default App;
