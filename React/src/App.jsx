// import { useState } from "react";

// const App = () => {
// let [age, setAge] = useState(12)

// const changeAge = () => {
//   const newAge = 15;
//   setAge(newAge);
// }

//   return (
//     <>
//       <h1>{age}</h1>
//       <button onClick={changeAge}>Change Age</button>
//     </>
//   )
// }

// export default App


import { useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  setInterval(() =>{
    setTime(new Date());
  }, 1000);

  // useEffect(() => {
  //   const timerID = setInterval(() => tick(), 1000);
  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, []);

  // function tick() {
  //   setTime(new Date());
  // }

  return (
    <div>
      <h1>Live Clock</h1>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
