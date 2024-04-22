import { createContext, useState } from "react";

export const todocontext = createContext(null);
export const usercontext = createContext(null);

const TodoContext = (props) => {

  const [tasks, setTasks] = useState([
    { title: "Task 1", completed: false },
    // { title: "Task 2", completed: false },
  ]);

  const [user, setuser] = useState([{ name: "User 1", valid: true}])

  return (
    <todocontext.Provider value={[tasks, setTasks]}>
        <usercontext.Provider value={[user, setuser]}>
            {props.children}
        </usercontext.Provider>
    </todocontext.Provider>
  );
};

export default TodoContext;
