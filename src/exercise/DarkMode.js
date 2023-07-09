import React, { useState } from 'react'

export default function DarkMode() {
    const [mode , setMode] = useState({
        backgroundColor : "white",
        color : "black"
    })
    const [btntext , setBtnText] = useState('Enable Dark Mode')
    const modeHandler = () => {
        if(mode.color === "black"){
            setMode({
                backgroundColor : "black",
                color : "white"
            })
            setBtnText('Enable Light Mode')
        }
        else{
            setMode({
                backgroundColor : "white",
                color : "black"
            })
            setBtnText('Enable Dark Mode')
        }
    }

  return (
    <div style = {mode}>
        <button onClick={modeHandler}>{btntext}</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

    </div>
  )
}
