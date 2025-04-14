import React from 'react'
import './components.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsDashCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Item = (props) => {
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    function format(){
        const result = props.title.substring(0,6);
        return result;
    }

  return (

    <div className="col-3">
        <div className="item card p-3" >
            <Link to={`/product/${props.id}`}><img src={props.image} className="card-img-top" alt="..."/></Link>
            <div className="card-body row">
                <h5 className="card-title col-7">{format()}...</h5>
                <span className="badge bg-success col-5 rounded-3 d-flex justify-content-center align-items-center h-3 py-auto">{props.price} $</span><br />

            </div>
            <div className="card-body d-flex justify-content-between align-items-center p-0">
                {/* <span  className='m-2 badge bg-primary'>{format()}</span> */}
                <Link style={{ textDecoration:'none' }}  className="card-link" to={`/product/${props.id}`}>Details</Link>
                {cartItems[props.id]===0 ?
                <button onClick={()=>{addToCart(props.id)}} className="btn btn-primary py-1 px-2 align-text-center"><small><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</small></button>
                  : cartItems[props.id]===1 ? 
                  <div className=''><BsFillTrashFill onClick={()=>{removeFromCart(props.id)}} className='h4 me-1 text-primary'/><span className='badge bg-warning rounded-circle p-2'>{cartItems[props.id]}</span><BsFillPlusCircleFill className='h4 ms-1 text-primary' onClick={()=>{addToCart(props.id)}} /></div>
                  : <div className=''><BsDashCircleFill onClick={()=>{removeFromCart(props.id)}} className='h4 me-1 text-primary'/><span className='badge bg-warning rounded-circle p-2'>{cartItems[props.id]}</span><BsFillPlusCircleFill className='h4 ms-1 text-primary' onClick={()=>{addToCart(props.id)}} /></div>

                }
            </div> 
        </div>
    </div>
    
  )
}

export default Item