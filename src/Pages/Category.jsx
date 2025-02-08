import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { IoDiamond } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";

function Category() {
   let[catt,setCatt]=useState([])
   useEffect(()=>{
    axios.get('https://dummyjson.com/products') .then(res => {
        setCatt(res.data.products);
   })
},[])
  return (
    <>
      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 g-5 px-5">
              <div className='word-spacing '>
            <h2 className='text-center text-uppercase '>
            Recent products
            </h2>
            <p className='text-center text-uppercase '>Our hot arrivals!</p>
            </div>
                <div className="d-flex justify-content-between flex-wrap gap-1 px-5 ">
                    {catt.slice(1,7).map((a)=>(
                       <div className="col-lg-3 g-1 mt-4">
                       
                        <div className="product-card position-relative">
                            <div className='sale postion-absolute  bg-danger text-white p-2'> sale </div>
                      <img key={a.id} src={a.thumbnail} className='w-100 border' alt="" />
                     
                      <div className="product-info position-absolute w-100 h-100 top-0 left-0 d-flex flex-column justify-content-center align-item-center text-white">
                      <p className='text-center'>{a.title}</p>
                      <p className='text-center'>Rs.{a.price}</p>
                      <p className='text-center'>Rating {a.rating}</p>
                      <button className='btn btn-primary '>Cart</button>
                      </div>
                      </div>
                    
                      </div>
                     
                    ))}
            
                 
                </div>
            </div>
          </div>
        </div>

      </section>

      <section className='sec'>
        <div className="container  g-5 px-5">
            <div className="row">
                <div className="col-lg-12">
                <div className='word-spacing '>
                <h2 className='text-center text-uppercase '>
                Highlighted Features
            </h2>
            <p className='text-center text-uppercase '>make your work easier and faster!</p>
                    </div>
                </div>
                <div className="py-5 col-lg-4 d-flex justify-content-center gap-2 align-item-center g-3">
                <IoDiamond className='fs-2' />
                <div>
                <h5 className='fw-bold'>Free Worldwide Shipping </h5>
                <p >Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna. </p>
                </div>
                </div>
                <div className="py-5 col-lg-4 d-flex justify-content-center gap-2 align-item-center g-3">
                <CiBatteryFull className='fs-2' />
                <div>
                <h5 className='fw-bold'>Secure Checkout  </h5>
                <p >Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna. </p>
                </div>
                </div>
                <div className=" py-5 col-lg-4 d-flex justify-content-center gap-2 align-item-center g-3">
                <FaPeopleGroup className='fs-2' />
                <div>
                <h5 className='fw-bold'>30 days back quarantee  </h5>
                <p >Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna. </p>
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Category
