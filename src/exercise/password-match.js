import { useState } from "react";


const PasswordMatch = () => {

    const [comparePassword,setComparePassword] = useState({
        password : '',
        confirmPassword : ''
    })
    const [misMatch , setMisMatch] = useState(true)
    const PasswordHandler = (e) => {
        setComparePassword({
            ...comparePassword, password : e.target.value
        })
    }
    const confirmPasswordHandler = (e) => {
        setComparePassword({
            ...comparePassword, confirmPassword : e.target.value
        })
        if(comparePassword.password !== e.target.value)
             setMisMatch(true)
        else
             setMisMatch(false)
     
    }
  

    return <div>
   
        <input onChange={PasswordHandler} type="text" placeholder="enter password"></input>
        <input onChange={confirmPasswordHandler}type="text" placeholder="re-enter password"></input>
        {misMatch && <div style={{color : "red"}}>Password does not match</div>}
        <button disabled={misMatch}>Submit</button>
      
    </div>
}

export default PasswordMatch;