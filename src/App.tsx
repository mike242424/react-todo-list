import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: Math.random() * 10000,
          text: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  };

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label htmlFor={`checkbox-${todo.id}`}>
              <input
                id={`checkbox-${todo.id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.text}
            </label>
            <button
              className="btn  btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
