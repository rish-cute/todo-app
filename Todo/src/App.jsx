import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {

  const [task, setTask] = useState("");

  return (
    <div className="app-container">
      <div className="todo-card">

        <Header />

        <div className="todo-input-section">

          <input
            type="text"
            placeholder="Enter a new task..."
            className="todo-input"

            value={task}

            onChange={(event) => setTask(event.target.value)}
          />

          <button className="add-btn">
            Add Task
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;