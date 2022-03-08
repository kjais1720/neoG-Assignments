import {
    useState,
    createContext,
    useContext,
    useEffect
} from "react";

import axios from 'axios';

import {v4 as uuidv4 } from 'uuid';

import {
    useProduct
} from '../products-context/ProductProvider';

const cartContext = createContext({
    cartItems: [],
    setCartItems: () => {}
});

export const useCart = () => useContext(cartContext)

export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([
    //     {
    //         id: uuidv4(),
    //         quantity:4,
    //         name: "Asics Rubber shoes",
    //         brand: "Asics",
    //         category: "Running shoes",
    //         ratings: 4.5,
    //         price: 2999,
    //         prevPrice: 4999,
    //         available:10,
    //         badge: "",
    //         new: false,
    //         desc:"",
    //         wishlisted: false,
    //         addedToCart: true,
    //         imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3284/7061/PAYNTR_V_White_and_Blue_Cricket_Spike_Shoes_cricketershop_1__10050.1600261642.jpg?c=1"
    //     },
    //     {
    //         id: uuidv4(),
    //         quantity:2,
    //         name: "Puma Sunblaze red shoes",
    //         brand: "Asics",
    //         category: "Running shoes",
    //         ratings: 4.5,
    //         price: 2999,
    //         prevPrice: 4999,
    //         available:10,
    //         badge: "",
    //         new: false,
    //         desc:"",
    //         wishlisted: false,
    //         addedToCart: true,
    //         imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3654/9046/Puma_20_Sunblaze_Cricket_Rubber_Shoes_Red_Whitecricketershop.com_1__75957.1642683785.jpg?c=1"
    //     },
    //     {
    //         id: uuidv4(),
    //         quantity:6,
    //         name: "SG campus cricket balls",
    //         brand: "Sunridges",
    //         category: "SG",
    //         ratings: 4.5,
    //         price: 299,
    //         prevPrice: 599,
    //         available:10,
    //         badge: "",
    //         new: false,
    //         desc:"",
    //         wishlisted: false,
    //         addedToCart: true,
    //         imgSrc: "https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/500x500/products/3557/8648/SG_Test_Cricket_Ball_Pink_Cricketershop.com__94879.1624540888.jpg?c=1"
    //     },
    
    // ]);

    const [cartItems, setCartItems] = useState([])
    const getData = async ()=>{
        const api_uri = "https://622443c23af069a0f9b21368.mockapi.io/crickstock_products"
        let {data} = await axios.get(api_uri);
        // const parsedData = JSON.parse(JSON.stringify(data))
        console.log(data);
        data.products = data.products.map(item=>({...item,quantity:1,addedToCart:true}))
        setCartItems(data.products.slice(0,3))
    }
    useEffect(()=>{
        getData();
    },[])

    const { setProductsList } = useProduct();

    // Utilities
    const increaseItemCount = (itemId) => {
        setCartItems(currList => {
            const updatedCartList = currList.map(item => item.id === itemId ? {
                ...item,
                quantity: item.quantity + 1
            } : {
                ...item
            })
            return updatedCartList;
        })

        setProductsList(currList => currList.map(item => item.id === itemId ? {
            ...item,
            available: item.available - 1
        } : {
            ...item
        }))

    }

    const deleteCartItem = itemId => {
        const itemToBeDeleted = cartItems.find(item => item.id === itemId);
        const deletedItemQuantity = itemToBeDeleted.quantity;
        setCartItems(currList => currList.filter(item => item.id !== itemId));
        setProductsList(currList => currList.map(item => item.id === itemId ? 
            {
            ...item,
            available: item.available + deletedItemQuantity,
            addedToCart: false,
            } : 
            { ...item }
        ))
    }

    const decreaseItemCount = (itemId) => {
        setCartItems(currList => {
            const updatedCartList = currList.map(item => item.id === itemId ? {
                ...item,
                quantity: item.quantity - 1
            } : {
                ...item
            })
            return updatedCartList;
        })
        setProductsList(currList => currList.map(item => item.id === itemId ? {
            ...item,
            available: item.available + 1
        } : {
            ...item
        }))
    }

    const addToCart = itemId => {

        const itemToBeUpdated = cartItems.find(item => item.id === itemId);

        if (itemToBeUpdated) {
            itemToBeUpdated.quantity >= 3 ? console.log('Kharche bhaisaab') : increaseItemCount(itemId)
        } else {
            setProductsList(currList =>
                currList.map(item => item.id === itemId ? {
                    ...item,
                    addedToCart: !item.addedToCart,
                    available: item.available - 1
                } : item)
            )
            setCartItems(currList => [...currList,
                {
                    id: itemId,
                    quantity: 1
                }
            ])
        }
    }

    return ( 
        <cartContext.Provider value = {
            {
                cartItems,
                addToCart,
                increaseItemCount,
                decreaseItemCount,
                deleteCartItem
            }
        }> { children }
        </cartContext.Provider>
    )
}