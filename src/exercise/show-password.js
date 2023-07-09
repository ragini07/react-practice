import { useState } from "react";


const ShowPassword = () =>{
    const [show,setShow] = useState(false);

    const toggleHandler = () => {
        setShow(() => !show)
    }
    return <>
    <input
        type={ show ? "text" : "password"} 
        placeholder="enter password"></input>
    
    <button onClick={toggleHandler}>{show ? "Hide" : "show"} Password</button>
    </>
}

export default ShowPassword;