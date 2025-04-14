import React, { useContext } from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import './components.css'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    function rating() {
        const count = product.rating.count;
        return count;
    }
  return (
    <div>
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="row d-flex w-75 justify-content-center">
                <div className="display p-3 col-5" >
                    <img src={product.image} className="card-img" alt="..."/>
                </div>
                <div className="display col-7">
                    <div className="card m-3" >
                        <div className="card-body">
                            <h5 className="card-title h4 text-primary">{product.title}</h5>
                            <div className="rating d-inline-flex align-items-center">
                                <BsStarFill className='' />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                                <p className='ms-2 small my-0 p'>({rating()})</p>
                            </div>
                            <div className="card-body dropdown show">
                                <a className="btn bg-white dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <h5>Extra Information</h5>
                                </a>

                                <div className="dropdown-menu card-body w-100" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item text-wrap w-100" href="#">{product.description}</a>
                                </div>
                            </div>
                            <span className="badge bg-success rounded-1 py-1 text-align-middle"><h6>{product.price} $</h6></span><br />
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-center p-0">
                            <button onClick={()=>{addToCart(product.id)}} className="btn btn-lg btn-primary py-1 px-2 w-100 mx-2 mb-3"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay