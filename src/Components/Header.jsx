import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';
import CartCat from '../Pages/CartCat';


function Header() {
  let{state,dispatch}=useContext(CartCat)
  let [categories , setCategory ] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(res => setCategory(res.data))
  }, []);

  return (
    <>
      <header>

        <nav className="navbar navbar-expand-lg bg-white border border-bottom">
          <div className="container">
            <Link className="navbar-brand text-uppercase fw-bold" to={'/'}> Bala's Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link  className="nav-link active text-uppercase " aria-current="page" to={'/'}>Home</Link>
                {categories.slice(0, 5).map((category,index) => (
                  <li key={index} className="nav-item text-uppercase" >
                    <Link  className="nav-link active "  to={`/products/${category.slug}`}>{category.name}</Link>
                    
                  </li>
                ))}



               

              </ul>
              <div className='d-lg-inline d-block'>
              <Link type="button" className="btn btn-primary position-relative " to={'/cart'}>
                <FaShoppingCart  />

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products/:category' element={<Products/>}/>
        <Route path='/details/:did' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
    
  )
}

export default Header
