import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/breadcrum.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDisplay from '../Components/ProductDisplay.jsx';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const products = all_products

  const {productId} = useParams();


  const product = products.find((e) =>
      e.id === Number(productId)
  )




  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product