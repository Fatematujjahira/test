import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
const user = <FontAwesomeIcon icon={faUserTie} />
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const book of cart){
        total = total+book.salary;
    }

    return (
        <div className ="cart-gap">
            <h2><span className="user">{user}</span> : <span className="cart-length">{
             props.cart.length}</span></h2><hr />
          
            <h3>Total Salary: $ { total.toFixed(2) }</h3><hr />
            <ul className='list-unstyled'>
                {
                    cart.map(book => <Name key={book.name} name={book.name} />)
            }
            </ul>
            <hr />
             <button  type="button" className="btn btn-outline-secondary ">Buy Book</button>
             
        </div>
    );
};

function Name(props)
{
    return (
        <li>{ props.name }</li>
   )
}

export default Cart;