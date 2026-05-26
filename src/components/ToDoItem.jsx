// Component for displaying single todo item
function ToDoItem({
  item,
  editId,
  editText,
  setEditText,
  handleEditTask,
  handleSaveEdit,
  handleToggleComplete,
  handleDeleteTask,
}) {

  return (

    <div className="task-item">

      {/* Edit Input */}
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
  );
}

export default ToDoItem;