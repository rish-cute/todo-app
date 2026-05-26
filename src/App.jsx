// Importing React hook and components
import { useState } from "react";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

import "./App.css";

function App() {

  // Input state
  const [task, setTask] = useState("");

  // All tasks state
  const [tasks, setTasks] = useState([]);

  // Editing task id
  const [editId, setEditId] = useState(null);

  // Editing text state
  const [editText, setEditText] = useState("");

  // Add Task
  const handleAddTask = () => {

    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  // Delete Task
  const handleDeleteTask = (id) => {

    const updatedTasks = tasks.filter(
      (item) => item.id !== id
    );

    setTasks(updatedTasks);
  };

  // Complete Task
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

  // Start Editing
  const handleEditTask = (id, currentText) => {

    setEditId(id);

    setEditText(currentText);
  };

  // Save Edited Task
  const handleSaveEdit = (id) => {

    const updatedTasks = tasks.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          text: editText,
        };
      }

      return item;
    });

    setTasks(updatedTasks);

    setEditId(null);

    setEditText("");
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
            onChange={(event) =>
              setTask(event.target.value)
            }
          />

          <button
            className="add-btn"
            onClick={handleAddTask}
          >
            Add Task
          </button>

        </div>

        {/* Todo List Component */}
        <ToDoList
          tasks={tasks}

          editId={editId}
          editText={editText}

          setEditText={setEditText}

          handleEditTask={handleEditTask}

          handleSaveEdit={handleSaveEdit}

          handleToggleComplete={
            handleToggleComplete
          }

          handleDeleteTask={
            handleDeleteTask
          }
        />

      </div>

    </div>
  );
}

export default App;