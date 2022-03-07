import './app.css';
import React from 'react';
import TodoApp  from './useState/todo/TodoApp';
import {AddressComponent} from './useEffect/address-management/AddressComponent';
// import {Timer} from './useEffect/timer'

export default function App(){
    return(
        <div className="App pd-xlg">   
            <AddressComponent/>
        </div>
    )
}