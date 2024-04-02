// import { useState } from "react"

import { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("John");

// // const wrapper === () => changeUsername("Jane");

//   const changeUsername = (x) => {
//     setUsername(x);
//   }
// console.log(username);

//   return (
//     <>
//       <nav>
//         <h1>{username}</h1>
//       </nav>
//       <section>
//         <button onClick={() => changeUsername("Jane")}>Change User</button>
//         <p>This is section</p>
//       </section>
//       <footer>
//         <p>This is footer</p>
//       </footer>
//     </>
//   )
// }

// export default App

const App = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState();

  const submitButton = (e) => {
    e.preventDefault();
    console.log({username, email, password});
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
  };

//   const ChangeHandler = (e) => setUsername(e.target.value)
  
//   const ChangeHandler = (e) => setEmail(e.target.value)
  
//   const ChangeHandler = (e) => setPassword(e.target.value)
  
  return (
    <>
      <form onSubmit={submitButton}>
        <label htmlFor="text">Username: </label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" value={username} />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" value={password} />
        <br />
        <br />
        <button>Sumit</button>
      </form>
    </>
  );
};

export default App;
