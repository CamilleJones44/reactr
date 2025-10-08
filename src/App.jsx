import { useState } from 'react'

import './App.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Welcome to the counter App</h1>

      <Counter title = "My Counter App"/>

    </div>
  )
}
function Counter({title}) {
  // you'll need to add state and props here.
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    // This function should increase the count
    setCount(count + 1);
   
  }


  const handleReset = () => {
    // This function should increase the count
    setCount(0);
  
  }

  return (
    <div>

      <h2>{title}</h2>
      <p>Count:{count}</p>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
