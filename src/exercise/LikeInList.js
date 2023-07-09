import React, { useState } from 'react'

export default function LikeInList() {
    const listItems = [
        {
            id:1,
            name:"rags",
            like : 'Like'
        },
        {
            id:2,
            name:"puja",
            like : 'Like'
        },
        {
            id:3,
            name:"dolly",
            like : 'Like'
        }
    ]
    const [likedItems , setLikedItems] = useState(listItems)
 

    const likeHandler = ({id}) => {
        const itemIndex = likedItems.findIndex(item => item.id === id)
        const itemLiked = likedItems[itemIndex]
        const updatedItem = {...itemLiked , like : 'Liked'}
        const updatedItems = [...likedItems]
        updatedItems[itemIndex] = updatedItem
        setLikedItems([...updatedItems])
    }
      return (
    <div>
        {likedItems.map(item  => {
            return (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={()=> likeHandler(item)}>{item.like}</button>
                </div>
            )
        })}
    </div>
  )
}
