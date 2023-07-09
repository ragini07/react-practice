import { useState } from 'react';
import '../index.css';

const CharacterCounter = () => {
    const [counter,setCounter] = useState(0)
    const charactercountHandler = (e) => {
        setCounter(e.target.value.length)
    }

    return (<div>
        <textarea 
        rows="4" cols="50"
        onChange={charactercountHandler}></textarea>
        <button disabled={counter >30}>Tweet</button>
        <p>
        <span style={{color: counter > 25 ? 'red' : 'black'}}>{counter}</span><span>/30</span>
        </p>
      
    </div>)
}

export default CharacterCounter;