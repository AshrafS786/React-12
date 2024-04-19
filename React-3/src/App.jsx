import { useContext } from "react"
import { tasksContext } from "./Contexts/Context"

const App = () => {
  useContext(tasksContext)
  return (
    <div>
      app
    </div>
  )
}

export default App
