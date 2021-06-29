import React from "react";
import TodoItems from "./todoItems";

const TodoList = ({
  todos,
  input,
  onRemove,
  onToggleCheck,
  onChangeVal,
  onSubmitVal,
}) => {
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmitVal}>
        <input onChange={onChangeVal} value={input} />
        <button type="submit">추가</button>
      </form>
      <ul>
        <TodoItems
          todos={todos}
          onRemove={onRemove}
          onToggleCheck={onToggleCheck}
        />
      </ul>
    </div>
  );
};

export default TodoList;
