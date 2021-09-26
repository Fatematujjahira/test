import React from 'react';
import'./Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Books = (props) => {
    const {images, book, name, published , salary , Genre} = props.book;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
          
   <div className="col m-2 mt-3" style={{width: '300px'}}>
    <div className="card h-100">
    <img src={images} className="card-img-top rounded-circle "  alt="..."/>
    <div className="card-body">
        
         <h4>Name: {name}</h4>
         <h6 className="card-title">Book: {book}</h6>
         <h6> First Published: {published}</h6>
       
         <h6>Genre: {Genre}</h6>
        <h4>Salary:$ {salary}</h4>
      </div>
      {/* <div className="card-footer"> */}
      <button onClick={()=>props.displayData(props.book)} type="button" className="btn btn-secondary">{element} Add To Cart</button>
      {/* </div> */}
    </div>
    </div>
    </div>
    

    );
};

export default Books;