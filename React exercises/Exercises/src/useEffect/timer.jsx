import { useState, useEffect } from "react";

export const Timer = () => {
    const [count, setCount ] = useState(10);
    const [timerId, setTimerId] = useState(0);
    
    // useEffect(()=>{
    //     const timerId = setInterval(()=>{
    //         // setCount(curr=>curr-1);
    //     },1000)
    //     if(count ===0 ) clearInterval(timerId);
    //     setTimerId(timerId);
    // },[count])

    // useEffect(()=>{
    //     return ()=> clearInterval(timerId)
    // },[])

    // useEffect(()=>{
    //     const timerId = setInterval(()=>{
    //         if(count === 0 ) clearInterval(timerId);
    //         else setCount(curr => Number(curr)-1)
    //     },1000)
    //     return () => clearInterval(timerId);
    // },[count])

// Method 2
   useEffect(()=>{
        const timerId  = setInterval(()=>{
            setCount(curr=>curr-1);
        },1000)
        setTimerId(timerId);

        return ()=> clearInterval(timerId);
    },[])

    useEffect(()=>{
        if(count === 0 ) clearInterval(timerId);
    },[count])

// Method 3
    useEffect(() => {
        const timerId = setInterval(() => {
        setCount((count) => count - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timerId);
        }, 10000)
    }, []);

    return(<p>
        {count}
    </p>)
}

// with setTimeout
