import { useEffect, useState } from "react";
import "./styles.css";

export default function StatisInput() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const latestValue = localStorage.getItem("inputValue");
    setInput(latestValue);
    console.log("render");
  }, []);

  useEffect(() => {
    localStorage.setItem("inputValue", input);
  }, [input]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input onChange={changeHandler} value={input}></input>
    </div>
  );
}
