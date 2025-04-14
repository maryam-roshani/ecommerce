import React from 'react'
import './components.css'
import { faSun, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import women from '../assets/women.jpg'
import men from '../assets/man.png'
import jewelery from '../assets/jewell.jpg'
import electronic from '../assets/electronic.jpg'
import {Link} from 'react-router-dom';
import { useState} from 'react';




const Hero = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='px-4 w-50'>
        <div id="carouselExampleIndicators" className="carousel d-flex justify-content-center" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">      
                    <Link to='/men'><img className="d-block w-100" src={men} alt="First slide" onClick={()=>{setMenu("men")}} /></Link>
                </div>
                <div className="carousel-item">
                    <Link to='/women'><img className="d-block w-100" src={women} alt="Second slide" onClick={()=>{setMenu("women")}} /></Link>
                </div>
                <div className="carousel-item">
                    <Link to='/jewelery'><img className="d-block w-100" src={jewelery} alt="Third slide" onClick={()=>{setMenu("jewelery")}} /></Link>
                </div>
                <div className="carousel-item">
                    <Link to='/electronics'><img className="d-block w-100" src={electronic} alt="Forth slide" onClick={()=>{setMenu("electronics")}} /></Link>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Hero