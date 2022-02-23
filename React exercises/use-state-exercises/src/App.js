import './app.css';
// import 'https://tarang-ui.netlify.app/stylesheets/main.css'
import React from 'react';
import CharCount from './components/CharCount';
import AddToCart from './components/AddToCart';

export default function App(){
    return(
        <div className="App pd-xlg">   
            <AddToCart/>
        </div>
    )
}