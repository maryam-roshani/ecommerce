import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaX } from "react-icons/fa6";
import { BsDashCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import './components.css'


const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart, addToCart, removeCartItem} = useContext(ShopContext)

    return (
    <div className='cartitems my-3 mx-5' >
        <div className="cartitems-format-main d-grid align-items-center py-2 px-0 fs-6 fw-medium">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='bg-secondary border-0 fw-bold py-0 mt-0'/>
        {all_products.map((e, i)=>{
            if(cartItems[e.id]>0)
            {
            return <div>
                    <div className="cartitems-format d-grid align-items-center justify-content-center py-2 px-0 fs-6 fw-medium">
                        <img key={i} src={e.image} alt="" className='carticon-product-icon mx-3 pe-auto' />
                        <p key={i}>{e.title}</p>
                        <p key={i}>{e.price} <small>$</small></p>
                        <div className='d-flex align-items-center justify-content-center' key={i}><BsDashCircleFill onClick={()=>{removeFromCart(e.id)}} className='h4 me-1 text-primary'/><span className='badge bg-warning rounded-circle p-2'>{cartItems[e.id]}</span><BsFillPlusCircleFill className='h4 ms-1 text-primary' onClick={()=>{addToCart(e.id)}} /></div>
                        <p key={i}>{(e.price*cartItems[e.id]).toFixed(2)} <small>$</small></p>
                        <BsFillTrashFill key={i} onClick={()=>{removeCartItem(e.id)}} className='fs-3 my-0 mx-4 pe-auto text-danger' />
                    </div>
                    <hr className='bg-secondary border-0 fw-bold py-0 mt-0' />
                </div>
            }
            return null;
        })}
        <div className="cartitems-down d-flex mt-5 mb-3 mx-0">
            <div className="cartitems-total flex-grow-1 d-flex flex-column mx-5 ">
                <h3>cart Totals</h3>
                <div>
                    <div className="cartitems-total-item d-flex justify-content-between pt-1 px-0">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className='m-0' />
                    <div className="cartitems-total-item d-flex justify-content-between pt-1 px-0">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                </div>
                <hr className='m-0' />
                <div className="cartitems-total-item d-flex justify-content-between pb-1 pt-2 px-0">
                    <h5 className='fw-bold'>Total</h5>
                    <h5 className='fw-bold'>${getTotalCartAmount()}</h5>
                </div>
                <button className='btn btn-lg rounded-1 border-0 bg-danger text-bg-danger fs-6 fw-medium pe-auto w-50'><small>PROCEED TO CHECKOUT</small></button>
            </div>
            <div className="cartitems-promocode d-flex flex-grow-1 fs-6 flex-column ">
                <p className='mb-0'>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox w-75 mt-2 h-75 bg-white d-flex">
                    <input type="text" placeholder='promo code' className='border-0 fs-6 w-75 h-25 px-2' style={{backgroundColor:'#c4c2be'}} />
                    <button className='w-50 h-25 fs-6 bg-black pe-auto text-bg-dark'>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems