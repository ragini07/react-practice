import './toast.css'

const toast = ({data , onclick}) => {
    let classes = "toast "
    data.show ? classes = classes + 'show ' : classes = "toast "   
    if(data.type === 'Primary')
        classes = classes + 'primary'
    if(data.type === 'Success')
        classes = classes + 'success'
    if(data.type === 'Error')
        classes = classes + 'error'


    return ( <div className={classes}>
        {data.message} 
        <button onClick={onclick}>Close</button>
        </div>)
}

export default toast;