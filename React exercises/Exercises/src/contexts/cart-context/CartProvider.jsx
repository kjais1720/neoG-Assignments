import {
    useState,
    createContext,
    useContext
} from "react";

import {
    increaseItemCount,
    decreaseItemCount,
    deleteItem
} from "./utils";

const defaultValue = {
    itemCount: 0,
    items: []
}

const cartContext = createContext({
    cartItems: [],
    setCartItems: () => {}
});

export const useCart = () => useContext(cartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = itemId => {
        const itemToBeUpdated = cartItems.find(item => item.id === itemId);
        itemToBeUpdated ? increaseItemCount(itemId) : setCartItems(currList => [...currList, {
            id: itemId,
            quantity: 1
        }])
    }

    return ( 
        <cartContext.Provider value = {
            cartItems,
            addItemToCart,
            increaseItemCount,
            decreaseItemCount,
            deleteItem
        }>
        { children } 
        </cartContext.Provider>
    )
}
