function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <>
      <h2 className="head">TODO LIST</h2>
      <form onSubmit={onAddFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    </>
  );
}
export default AddTodoForm