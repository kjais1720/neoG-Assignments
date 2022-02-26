import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Input = ({setData})=>{
    const [inputText, setInputText] = useState('');
    return (
        <div className = 'tr-input-group gap-sm d-flex'>
            <input onChange={e=>setInputText(e.target.value)} className = "tr-input-item" value = {inputText} />
            <button onClick = {()=>setData(prevList => [...prevList,{id: uuidv4(),title:inputText, isDone: false, isPinned:false}])} className="tr-btn tr-btn-primary">Add</button>
        </div>
    )
}

export default Input;