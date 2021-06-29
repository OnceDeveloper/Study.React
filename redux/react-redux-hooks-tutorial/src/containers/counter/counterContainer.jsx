import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../../components/counter/counter";
import {
  decrement,
  increment,
  reset,
  inputIncrement,
} from "../../modules/counter";

const CounterContainer = () => {
  const counter = useSelector((state) => state.counter.number, shallowEqual); // React.memo와 같이 shallow compare로 동작

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increment());
  const onDecrease = () => dispatch(decrement());
  const onReset = () => dispatch(reset());

  const onInputIncrese = (payload) => dispatch(inputIncrement(payload));

  return (
    <Counter
      number={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onReset={onReset}
      onInputIncrese={onInputIncrese}
    />
  );
};

export default CounterContainer;
