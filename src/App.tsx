import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todos";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("item");
    if (savedTodos === null) {
      return [];
    } else {
      return JSON.parse(savedTodos);
    }
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(todos));
  }
  , [todos]);

  const addTodo = (title: string) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: Math.random() * 10000,
          title,
          completed: false,
        },
      ];
    });
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
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
