import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue('');
    setCategory('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="todo-form">
        <h2>Nova Tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o título da tarefa"
            onChange={handleChange}
            value={value}
          />
          <select value={category} onChange={handleCategory}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
          <button type="submit">Nova Tarefa</button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
