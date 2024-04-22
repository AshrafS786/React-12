import { useContext } from "react";
import { todocontext, usercontext } from "./Contexts/TodoContext";

const App = () => {
  const [tasks, setTasks] = useContext(todocontext);
  const [user, setuser] = useContext(usercontext);
  console.log(tasks);
  console.log(user);
  return;
  <div></div>;
};

export default App;
