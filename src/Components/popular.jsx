import React from 'react'
import axios from "../axios.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Item from './item.jsx';
import "bootstrap/dist/css/bootstrap.min.css";



const PRODUCTS_URL = "http://localhost:8000/products";

const getData = async() => {
  await axios.get(PRODUCTS_URL)
      .then(response => {
          console.log(response);
      })
};

const Popular = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(PRODUCTS_URL)
            setProducts(request.data);
            return request.data;
        }
        fetchData();
        }, [products])

  return (
    <div className='popular'>
        <h1 className='ms-4'>Products</h1>
        <hr/>
        <div className="container-fluid px-5 py-3">
            <div className="row mx-5 my-3">
                {products.map((item,i) => {
                    return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Popular