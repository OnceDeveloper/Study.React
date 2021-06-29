import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/todoList/todoList";
import { changeInput, insert, toggleCheck, remove } from "../../modules/todos";

const TodoListContainer = () => {
  const { input, todos } = useSelector((state) => state.todos, shallowEqual);

  const dispatch = useDispatch();
  const onChangeInput = (inputVal) => dispatch(changeInput(inputVal));

  const onInsert = (input) => dispatch(insert(input));
  const onToggleCheck = (id) => dispatch(toggleCheck(id)); //todos.id
  const onRemove = (id) => dispatch(remove(id));
  const onChangeVal = (e) => {
    onChangeInput(e.target.value);
  };

  const onSubmitVal = (e) => {
    e.preventDefault();
    input && onInsert(input);
    onChangeInput("");
  };

  return (
    <TodoList
      input={input}
      todos={todos}
      onToggleCheck={onToggleCheck}
      onRemove={onRemove}
      onChangeVal={onChangeVal}
      onSubmitVal={onSubmitVal}
    />
  );
};

export default TodoListContainer;
