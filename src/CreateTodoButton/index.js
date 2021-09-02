import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  let onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="boton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };