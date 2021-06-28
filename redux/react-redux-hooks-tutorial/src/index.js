import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());
// console.log(store.getState()); => {counter : 0}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
