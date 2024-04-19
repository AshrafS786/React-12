// // import { useState } from "react"

import { useState } from "react";

// import { useState } from "react";

// // const App = () => {
// //   const [username, setUsername] = useState("John");

// // // const wrapper === () => changeUsername("Jane");

// //   const changeUsername = (x) => {
// //     setUsername(x);
// //   }
// // console.log(username);

// //   return (
// //     <>
// //       <nav>
// //         <h1>{username}</h1>
// //       </nav>
// //       <section>
// //         <button onClick={() => changeUsername("Jane")}>Change User</button>
// //         <p>This is section</p>
// //       </section>
// //       <footer>
// //         <p>This is footer</p>
// //       </footer>
// //     </>
// //   )
// // }

// // export default App

// // const App = () => {
// // const [username, setUsername] = useState("");
// // const [graduated, setGraduated] = useState(false)
// // const [email, setEmail] = useState("");
// // const [password, setPassword] = useState();

// // const submitButton = (e) => {
// //   e.preventDefault();
// //   console.log({username, email, password});
// //   // console.log(e.target[0].value);
// //   // console.log(e.target[1].value);
// //   // console.log(e.target[2].value);
// // };

// //   const ChangeHandler = (e) => setUsername(e.target.value)
// //   const ChangeHandler = (e) => setEmail(e.target.value)
// //   const ChangeHandler = (e) => setPassword(e.target.value)

// // Two way binding
// //user input ->
// //useState ->

// //   return (
// //     <>
// //       {/* <form onSubmit={submitButton}>
// //         <label htmlFor="text">Username: </label>
// //         <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" value={username} />
// //         <br />
// //         <br />
// //         <label htmlFor="email">Email: </label>
// //         <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} />
// //         <br />
// //         <br />
// //         <label htmlFor="password">Password: </label>
// //         <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" value={password} />
// //         <br />
// //         <br />
// //         <button>Sumit</button>
// //       </form> */}

// //     </>
// //   );
// // };

// // export default App;

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [graduated, setGraduated] = useState(false);
//   const [gender, setGender] = useState("Female");
//   const [option, setOption] = useState();
//   const [desc, setDesc] = useState("hello");

//   const submitButton = (e) => {
//     e.preventDefault();
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//     console.log(e.target[2].value);
//     console.log({ username, graduated, gender, option, desc });
//   };
//   return (
//     <>
//       <form onSubmit={submitButton}>
//         <input
//           type="text"
//           placeholder="username"
//           onChange={(e) => setUsername(e.target.value)}
//         />{" "}
//         <br /> <br />
//         <input
//           type="checkbox"
//           onChange={(e) => setGraduated(e.target.checked)}
//           checked={graduated}
//         />{" "}
//         Gradduated <br /> <br />
//         <input
//           type="radio"
//           name="gender"
//           defaultValue="Male"
//           onChange={(e) => setGender(e.target.value)}
//           checked={gender === "Male" ? true : false}
//         />
//         Male
//         <input
//           type="radio"
//           name="gender"
//           defaultValue="Female"
//           onChange={(e) => setGender(e.target.value)}
//           checked={gender === "Female" ? true : false}
//         />
//         Female
//         <br />
//         <br />
//         <select value={option} onChange={(e) => setOption(e.target.value)}>
//           <option value="option 1">Option 1</option>
//           <option value="option 2">Option 2</option>
//           <option value="option 3">Option 3</option>
//         </select>
//         <br />
//         <br />

//         <textarea
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}>
//         </textarea>
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

// export default App;

//rendering the list item
// const App = () => {
//   const [tasks, setTasks] = useState([
//     { title: "Task 1", completed: true },
//     { title: "Task 2", completed: true },
//     { title: "Task 3", completed: false },
//     { title: "Task 4", completed: false },
//   ]);

//   let taskrender = tasks.map((task, index) => (
//     <li className={task.completed ? "text-red-500" : "text-blue-500"} key={index}>{task.title}</li>
//   ));

//   return (
//     <div>
//       <form></form>
//       <ul className="list-disc">{taskrender}</ul>
//     </div>
//   );
// };

// export default App;




const App = () => {
  const [tasks, setTasks] = useState([
        { title: "Task 1", completed: true },
        { title: "Task 2", completed: true },
        { title: "Task 3", completed: false },
        { title: "Task 4", completed: false },
      ]);
  let taskrender = tasks.map((task, index) => <li key={index}>{task.title}</li>
 
  const [title, setTitle ] = useState()
  
  const handleInputChange = (e) => {
    e.preventDefault()
    const newTask = { title, completed: false}
    const copytasks = [...tasks]
   copytasks.push(newTask)
setTasks(copytasks)
  }
  return (
    <form>
      <input value={inputValue} onChange={(e) => } type="text" placeholder="Enter your task" />
      <button>Add Item</button> <br />
      <ul className="list-disc">{taskrender}</ul>
    </form>
  );
};

export default App;
