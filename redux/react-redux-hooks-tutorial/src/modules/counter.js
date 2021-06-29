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
export const inputIncrement = createAction(
  INPUT_INCREMENT,
  (payload) => payload
);

const initialState = { number: 0 };

/** reducer */
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      const numberResult = state.number - 1;
      return { number: numberResult < 0 ? 0 : numberResult };
    case RESET:
      return { number: 0 };
    case INPUT_INCREMENT:
      //console.log(action); => type : "counter/INPUT_INCREMENT", payload : param값
      return { number: state.number + action.payload };
    default:
      return state;
  }
};

export default counter;
