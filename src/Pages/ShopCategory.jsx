import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/item'
import "bootstrap/dist/css/bootstrap.min.css";



const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  const products = all_products

  return (
    <div className='shop-category'>
      <h1>{props.category}</h1>
      <div className="dropdown show shopcategory-sort">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort By
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        <div className="container-fluid px-5 py-3 shopcategory-products">
            <div className="row mx-5 my-3">
              {products.map((item,i)=>{
              if (props.category===item.category) {
                return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} />
              }
              else{
                return null;
              }
            })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCategory