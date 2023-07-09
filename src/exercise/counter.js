import { useState } from 'react'

function counter() {
    const [ counter , setCounter] = useState(0)

  const clickHandler = (type,rate) => {
    if(type === 'decrease'){
     return  setCounter(prev => prev-rate)
    }
    return  setCounter(prev => prev+rate)
  }
  return (
    <div className="App">
      <button
        onClick={() => clickHandler('decrease',5)}>-</button>
      <span>{counter}</span>
      <button
        onClick={() => clickHandler('increase',10)}>+</button>
 
    </div>
  );
}

export default counter