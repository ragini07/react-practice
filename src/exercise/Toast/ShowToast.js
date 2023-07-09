import { useEffect, useState } from "react";
import Toast from "./toast";

const ShowToast = () => {
    const [toast , setToast] = useState({
        show : false,
        type : '',
        message : ''
    })
  
    const toastShowHandler = (type) => {
       setToast({...toast , message : "This is basic toast"})
        // const newToast = {
        //     ...toast , show : true
        // }
        console.log("outsie"+toast)
        if(type === 'Primary'){
            setToast({...toast ,type: 'Primary',show : true})
            console.log("inside"+toast)
        }
        if(type === 'Success'){
            setToast({...toast  ,type: 'Success',message : "This is sucess toast"})
        }
        if(type === 'Error'){
            setToast({...toast ,type: 'Error', message : "This is error toast"})
        }
        
    }

    console.log("re render")
 
    return (
        <>
        <button onClick={() => toastShowHandler('Primary')}>Toast</button>
        <button onClick={() => toastShowHandler('Success')}>Success</button>
        <button onClick={() => toastShowHandler('Error')}>Error</button>
        <Toast data = {toast} onclick={() => setToast({...toast ,  
        show : false,
        type : '',
        message : ''})}/>
        </>
    )
}

export default ShowToast