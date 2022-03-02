import React, {useState} from 'react';

const AddToCart = ()=>{
    const [cartItems, setCartItems] = useState([]);
    const products = [
        {   
            id:1,
            name:"item 1"
        },
        {   
            id:2,
            name:"item 2"
        },
        {   
            id:3,
            name:"item 3"
        },
        {   
            id:4,
            name:"item 4"
        },
        {   
            id:5,
            name:"item 5"
        }
    ]
    const insertItemInCart = product =>{
        
        setCartItems (curr => {
            let itemFound = false
            const newList = curr.map( item =>{
                if(item.id === product.id) {
                    itemFound = true;
                    return {...item,count:item.count+1};
                }
                else return {...item}
            })
            if(!itemFound) newList.push({...product, count:1});
            return newList;
        })
    }

    

    return(
        <main className='flex-col gap-xlg'>
            <ul className = 'w-80 mr-x-auto flex-col'>
                <h2>Products</h2>
                {products.map(item=>(
                    <li key={item.id} className = "bg-primary pd-sm txt-white d-flex w-100 justify-c-space-between">
                        {item.name}
                        <button onClick = {()=>insertItemInCart(item)} className="tr-btn txt-sm tr-btn-icon">
                            <button className='tr-btn tr-btn-cta'>Add to cart</button>
                        </button>
                    </li>
                ))}
            </ul>

            <ul className="w-80 mr-x-auto flex-col">
                <h2>Cart Items</h2>
                {cartItems && cartItems.map((item,idx)=>
                    (
                        <li key={idx} className = "bg-primary pd-sm txt-white d-flex align-i-center w-100 justify-c-space-between">
                            {item.name}
                            <div className="d-flex gap-sm">
                                <button className="tr-btn txt-sm tr-btn-icon">
                                    <i className = "fas fa-minus"></i>
                                </button>
                                <span className='txt-white txt-lg'>
                                    {item.count}
                                </span>
                                <button className="tr-btn txt-sm tr-btn-icon">
                                    <i className = "fas fa-plus"></i>
                                </button>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}

export default AddToCart;