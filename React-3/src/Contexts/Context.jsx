import { createContext, useState } from "react"

export const tasksContext = createContext(null)

const Context = (props) => {
    // const [tasks, setTasks] = useState([
    //     {title: "Task 1", completed: false},
    //     {title: "Task 2", completed: false},
       
    // ])
    
  return (
    <tasksContext.Provider value={"Hiie"}>
      {props.children}
    </tasksContext.Provider>
  )
}

export default Context
