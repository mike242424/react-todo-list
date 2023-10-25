interface TodoItemProps {
  completed: boolean;
  id: number;
  title: string;
//   key: number;
  toggleTodo: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({completed, id, title, toggleTodo, deleteTodo}: TodoItemProps) => {
  return (
    <li>
      <label htmlFor={`checkbox-${id}`}>
        <input
          id={`checkbox-${id}`}
          type="checkbox"
          checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn  btn-danger"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem