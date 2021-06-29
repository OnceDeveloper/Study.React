import React from "react";

const TodoItem = React.memo(({ todo, onRemove, onToggleCheck }) => {
  const { id, text, done } = todo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "none" }}>
      <span onClick={() => onToggleCheck(id)}>{text}</span>{" "}
      <button onClick={() => onRemove(id)}> 삭제 </button>
    </li>
  );
});

export default TodoItem;
