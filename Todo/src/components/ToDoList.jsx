import ToDoItem from "./ToDoItem";

function ToDoList({
  tasks,
  editId,
  editText,
  setEditText,
  handleEditTask,
  handleSaveEdit,
  handleToggleComplete,
  handleDeleteTask,
}) {

  return (

    <div className="task-list">

      {tasks.map((item) => (

        <ToDoItem
          key={item.id}

          item={item}

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

      ))}

    </div>
  );
}

export default ToDoList;