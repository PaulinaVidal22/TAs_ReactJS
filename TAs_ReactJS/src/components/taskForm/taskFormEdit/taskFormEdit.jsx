import classes from "/src/components/taskForm/taskForm.module.css";

export default function TaskFormEdit({ addTask, saveEditTask, editingValue, setEditingValue, editingIndex }) {
  
  const handleInputChange = (e) => {
    setEditingValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
        saveEditTask(); 
      } else {
        if (editingValue.trim() !== "") {
        addTask(editingValue);
        setEditingValue("");
        }
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editingValue}
        onChange={handleInputChange}
        placeholder={editingIndex !== null ? "Edit task" : "Add a new task"}
        className={classes.input_holder}
      />
      <button type="submit" className={classes.submit_button}>
        {editingIndex !== null ? "Save Task" : "Add Task"}
      </button>
    </form>
  );
}