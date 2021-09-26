import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'
// import Cart from '../Cart/Cart';
const Books = () => {
    const [books, setBooks ] = useState([])
    const[cart,setCart] = useState([])
    useEffect(() => {
        fetch('./Library.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])
    const displayData = (event) => {
        const newCart = [...cart, event]
        setCart(newCart)
    }
    return (
        <div className="main bg-dark">
             <div className="row">
                    <div className='col-9' style = {{display:'flex', flexWrap: 'wrap', justifyContent : 'space-around'}}>
                    {
                    books.map(book => <Book displayData ={displayData} key ={book.name} book={book}></Book>)
                     }
                    </div>
                    <div  className="cart-container col-3">
                    <Cart cart={cart}></Cart>
                    </div>
                </div>
          
               
               
          
        </div>
    );
};

export default Books;