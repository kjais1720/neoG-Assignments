
export const increaseItemCount = (itemId) => {
    setCartItems(currList => {
        const updatedCartList = currList.map(item => item.id === itemId ? {
            ...item,
            quantity: item.quantity + 1
        } : {
            ...item
        })
        return updatedCartList;
    })
}

export const deleteItem = itemId => setCartItems(currList => currList.filter(item => item !== itemId))

export const decreaseItemCount = (itemId) => {
    setCartItems(currList => {
        const updatedCartList = currList.map(item => item.id === itemId ? {
            ...item,
            quantity: item.quantity - 1
        } : {
            ...item
        })
        return updatedCartList;
    })
}

