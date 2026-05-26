import { useState } from "react";
import Header from "./components/Header";
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

              {/* Editing Mode */}
              {editId === item.id ? (

                <input
                  type="text"
                  value={editText}
                  className="edit-input"
                  onChange={(event) =>
                    setEditText(event.target.value)
                  }
                />

              ) : (

                <p
                  className={
                    item.completed
                      ? "completed-task"
                      : ""
                  }
                >
                  {item.text}
                </p>

              )}

              <div className="task-buttons">

                {/* Edit / Save Button */}
                {editId === item.id ? (

                  <button
                    className="save-btn"
                    onClick={() =>
                      handleSaveEdit(item.id)
                    }
                  >
                    Save
                  </button>

                ) : (

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEditTask(
                        item.id,
                        item.text
                      )
                    }
                  >
                    Edit
                  </button>

                )}

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