import { useContext, useState } from "react"

const AddToCart= () =>{

    const [cartItems,setCartItems] = useState([])
    console.log("re-render")
    const addToCartHandler = ({id,name,price}) => {
        const existingCartItemIndex = cartItems.findIndex(item => item.id === id )
        const existingCartItem = cartItems[existingCartItemIndex];
        if(existingCartItemIndex !== -1){
            const updatedItem = {
                ...existingCartItem, quantity : existingCartItem.quantity++
            }
            const updatedItems = [...cartItems]
            cartItems[existingCartItemIndex] = updatedItem
            setCartItems([...updatedItems])
        }
        else{
            setCartItems([...cartItems , {id,name,price,quantity : 1}])
        }
          
        console.log(cartItems)
        
      
    }
    return (
        <>
        <ul>
        {Products.map(product => {
            return (
                <li style={{border : "1px solid black" , margin: '1rem'}}
                key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <button 
                        onClick={() => addToCartHandler(product)}
                        style = {{background : "yellow"}}>Add To Cart</button>
                </li>
            )
        })}
        </ul>

        <h2>My Cart</h2>
        {
            cartItems.map(cartItem => {
                return (
                    <div 
                    key = {cartItem.id}
                    style = {{border : "1px solid black",margin: '1rem'}}>
                        <div>{cartItem.name}</div>
                        <div>{cartItem.price}</div>
                        <div>Quantity : {cartItem.quantity}</div>
                    </div>
                )
            })
        }
        </>
    )

   
}
const Products = [
    {
        id : 1,
        category : 'sports shoe',
        price : 2000,
        name : 'Nike jordan',
        stocked : true
    },
    {
        id : 2,
        category : 'sports shoe',
        price : 1000,
        name : 'puma jordan',
        stocked : true
    },
    {
        id : 3,
        category : 'sneakers',
        price : 5000,
        name : 'reebok',
        stocked : true
    },
    {
        id : 4,
        category : 'sneakers',
        price : 3000,
        name : 'UCB',
        stocked : true
    },
]
export default AddToCart