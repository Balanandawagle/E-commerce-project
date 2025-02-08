import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Products() {
  let{category}=useParams()
  let[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${category}`)
    .then((res) => {
      setProducts(res.data.products); 
    })
  },[category])
  return (
    <>
       <div className="container my-4">
      <h2 className="text-uppercase">Products in {category} category</h2>
      <div className="row py-5">
        {products.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          products.map((product)=>(
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.thumbnail} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/details/${product.id}`} className="btn btn-primary">Click Me</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  )
}

export default Products
