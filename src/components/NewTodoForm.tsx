import { useState } from "react";

interface NewTodoFormProps {
  addTodo: (title: string) => void;
}

const NewTodoForm = ({addTodo}: NewTodoFormProps) => {
    const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;

    addTodo(newItem);

    setNewItem("");
  };

  return (
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
  );
};

export default NewTodoForm;
