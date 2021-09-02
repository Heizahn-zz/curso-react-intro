import React from "react";
import "./TodoItem.css"

function TodoItem(props) {

  return (
    <li className="Item">
      <span
        className={`Icon IconCheck ${props.completed && 'IconCheckActive'}`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p className={`ItemP ${props.completed && 'ItemPComplete'}`}>
        {props.text}
      </p>
      <span
        className="Icon IconDelete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };