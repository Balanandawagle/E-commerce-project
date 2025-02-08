import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import axios from 'axios';

function Footer() {
     let[categories,setCategory]=useState([])
       useEffect(()=>{
        axios.get(`https://dummyjson.com/products/categories`).then(res=>{
            setCategory(res.data);
      
          });
        },[])
  return (
    <>

<footer className="text-center text-lg-start bg-body-tertiary text-muted ">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div className='fs-2'>
      <Link to={''} className="me-4 text-reset">
       <CiFacebook />
      </Link>
      <Link to={''} className="me-4 text-reset">
      <FaInstagram />
      </Link>
      <Link to={''} className="me-4 text-reset">
      <FiTwitter />
      </Link>
      <Link to={''} className="me-4 text-reset">
      <FiYoutube />
      </Link>
      
      
    </div>
   
  </section>

 
  <section className>
    <div className="container text-center text-md-start mt-5">
  
      <div className="row mt-3">
  
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Bala's Store
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <ul className='list-unstyled'>
        
          {categories.slice(0, 5).map((category,index) => (
              
                <li key={index} className="nav-item text-uppercase" >
                <Link  className="nav-link active "  to={`/products/${category.slug}`}>{category.name}</Link>
          </li>
          ))}
         </ul>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <ul className='list-unstyled'>
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          
          {categories.slice(0, 5).map((category,index) => (
              
              <li key={index} className="nav-item text-uppercase" >
              <Link  className="nav-link active "  to={`/products/${category.slug}`}>{category.name}</Link>
        </li>
        ))}
        </ul>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
  
      </div>

    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Balananda@Wgle</a>
  </div>

</footer>


    </>
  )
}

export default Footer
