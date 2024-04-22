import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Context from "./Contexts/Context.jsx";
import TodoContext from "./Contexts/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Context>
  //   <App />
  // </Context>
  <TodoContext>
    <App />
  </TodoContext>
);
