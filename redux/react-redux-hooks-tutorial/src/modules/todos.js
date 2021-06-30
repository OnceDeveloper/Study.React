import { createAction, handleActions } from "redux-actions";
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE_CHECK = "todos/TOGGLE_CHECK";
const REMOVE = "todos/REMOVE";

let id = 0; //todo를 새로 만들 때마다 1씩 더해줄 것! (배열 렌더링할 때 id가 있어야 최적화가 됨 + update나 check할 때 필요)

export const changeInput = createAction(CHANGE_INPUT, (inputVal) => inputVal);
export const insert = createAction(INSERT, (text) => ({ id: ++id, text }));
// export const insert = (text) => ({
//   type: INSERT,
//   payload: { id: ++id, text },
// });
export const toggleCheck = createAction(TOGGLE_CHECK, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          //action.payload 안의 id와 text값을 복사하고 'done' 추가해주겠다
          ...action.payload,
          done: false,
        }),
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), //만약에 todo의 id가 action.payload와 같지 않다면 필터링해라 == id값이 같지 않을때 값을 리턴해 == id값이 같다면 빼버린다
      };
    default:
      return state;
  }
};
export default todos;

//export default handleActions({});
