import { Fragment } from "react";
import "./app.css";
import CounterContainer from "./containers/counter/counterContainer";
import TodoListContainer from "./containers/todoList/todoListContainer";

function App() {
  // return <CounterContainer />
  return (
    <Fragment>
      <h1 style={{ color: "#9b07a8" }}>React-Redux Project</h1>
      <CounterContainer />
      <br /> <br /> <hr /> <hr /> <br />
      <TodoListContainer />
    </Fragment>
  );
}

export default App;
