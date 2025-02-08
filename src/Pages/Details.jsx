import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let{did}=useParams()
    let[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${did}`).then(res=>{
            setProduct(res.data);
        })
    },[did])
  
  return (
    <>
        <section>
            <div className="container">
                <h2 className="text-uppercase text-center my-4">{product.title} Details </h2>
                <div className="row">
                    <div className="col-lg-6">
                    <img src={product.thumbnail}  className="w-100" />
                    </div>
                    <div className="col-lg-4 my-5 py-5">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Ship: {product.shippingInformation}</p>
            <button className='btn btn-danger'>Read More</button>
            </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Details
