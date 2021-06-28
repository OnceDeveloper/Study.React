import { createAction } from "redux-actions";

/** type */
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECERMENT";
const RESET = "count/RESET";
const INPUT_INCREMENT = "counter/INPUT_INCREMENT";

/**action 생성 함수 */
// export const increment = () => ({
//   type: INCREMENT,
// });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
export const inputIncrement = createAction(INPUT_INCREMENT);

const initialState = 0;

/** reducer */
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case INPUT_INCREMENT:
      //console.log(action); => type : "counter/INPUT_INCREMENT", payload : param값
      return state + action.payload;
    default:
      return state;
  }
};

export default counter;
