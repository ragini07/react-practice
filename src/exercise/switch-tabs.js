import { useState } from "react"

const Home = () => {
    return (
        <div>Its Home component</div>
    )
}
const About = () => {
    return (
        <div>Its About component</div>
    )
    
}
const Profile = () => {
    return (
        <div>Its Profile component</div>
    )
    
}
const SwitchTab = () => {
    const [index , setIndex] = useState(0)
    const components = [<Home /> ,<About /> ,<Profile />]
 
        return (
            <>
            <button onClick={() => setIndex(0)}>Home</button>
            <button onClick={() => setIndex(1)}>About</button>
            <button onClick={() => setIndex(2)}>Profile</button>
            {components[index]}
            </>
        )
}
export default SwitchTab;   