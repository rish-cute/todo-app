import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {

  // State for input field
  const [task, setTask] = useState("");

  // State for storing all tasks
  const [tasks, setTasks] = useState([]);

  // Add Task Function
  const handleAddTask = () => {

    // Prevent empty task
    if (task.trim() === "") {
      return;
    }

    // Create new task object
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    // Add task to array
    setTasks([...tasks, newTask]);

    // Clear input field
    setTask("");
  };

  // Delete Task Function
  const handleDeleteTask = (id) => {

    const updatedTasks = tasks.filter(
      (item) => item.id !== id
    );

    setTasks(updatedTasks);
  };

  // Complete Task Function
  const handleToggleComplete = (id) => {

    const updatedTasks = tasks.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">

      <div className="todo-card">

        <Header />

        {/* Input Section */}
        <div className="todo-input-section">

          <input
            type="text"
            placeholder="Enter a new task..."
            className="todo-input"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button
            className="add-btn"
            onClick={handleAddTask}
          >
            Add Task
          </button>

        </div>

        {/* Task List */}
        <div className="task-list">

          {tasks.map((item) => (

            <div
              key={item.id}
              className="task-item"
            >

              <p
                className={
                  item.completed
                    ? "completed-task"
                    : ""
                }
              >
                {item.text}
              </p>

              <div className="task-buttons">

                <button
                  className="complete-btn"
                  onClick={() =>
                    handleToggleComplete(item.id)
                  }
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDeleteTask(item.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;