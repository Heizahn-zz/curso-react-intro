import React from "react";
import { TodoContext } from '../TodoContext';
import "./todoForm.css";

function TodoForm() {
  let [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  let onWrite = (event) => {
    setNewTodoValue(event.target.value)
  };
  let onCancel = () => {
    setOpenModal(false);
  };
  let onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  return (
    <form onSubmit = {onAdd}>
      <label>Escribe Tu nuevo TODO</label>
      <textarea 
      value = {newTodoValue}
      onChange = {onWrite}
      placeholder="cortar la cebolla para el almuerzo"
      />
      <div className="todoFormButtonContainer">
        <button
          className="todoFormButton todoFormButtonCancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="todoFormButton todoFormButtonAdd">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm }