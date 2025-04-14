import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Breadcrum = (props) => {
    const {product} = props;
    const getCategoryLink = (product) => {
      if (product.category === "women's clothing" ){
        return 'women'
      } else if (product.category === "men's clothing" ){
        return 'men'
      } else {
        return product.category
      }
    }
  return (
    <div className='breadcrum ms-3 mt-2'>
        <Link className='text-dark pe-auto text-decoration-none' to ='/'>HOME</Link> <FaAngleRight /> <Link className='text-dark pe-auto text-decoration-none' to ='/'>SHOP</Link> <FaAngleRight /><Link className='text-dark pe-auto text-decoration-none' to ={`/${getCategoryLink(product)}`}>{product.category}</Link><FaAngleRight />{product.title}</div>
  )
}

export default Breadcrum