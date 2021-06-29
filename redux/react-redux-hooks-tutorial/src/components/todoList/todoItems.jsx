import React from "react";
import TodoItem from "./todoItem";

const TodoItems = React.memo(({ todos, onRemove, onToggleCheck }) => {
  return todos.map((todo, index) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onRemove={onRemove}
      onToggleCheck={onToggleCheck}
    />
  ));
});
export default TodoItems;
