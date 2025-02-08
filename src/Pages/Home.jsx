
import logo from '../assets/background.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination,  Navigation } from 'swiper/modules';

import { IoDiamond } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { CiBatteryFull } from 'react-icons/ci';
import CartCat from './CartCat';

function Home() {
  let highlighRef = useRef()
  let recentRef=useRef()
  let checkRef=useRef()
 
  let scrollToSection =(ref)=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  }
  let{state,dispatch}=useContext(CartCat)
   let[catt,setCatt]=useState([])
  let[product,setProduct]=useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products`).then(res=>{
      setProduct(res.data.products);
        setCatt(res.data.products);

    });
  },[])
  let[word,setWord]=useState("SHOP")
  let name = ["SHOP", "STORE", "BOUTIQUE", "MALL"];
  useEffect(()=>{
    let i=0
    let interval =setInterval(()=>{
      i=(i+1)%name.length
      setWord(name[i])
    },2000)
  
    AOS.init({ duration: 1000 ,easing: 'ease-in-out'});
  },[])
  return (
    <>
      <section ref={checkRef}>
        
          
                <div className="col-lg-12">
                    <div className="back">
                    <img className='w-100' src={logo} alt="" />
                    <div className="back-content" >
                    <h2 >WELCOME IN OUR <span data-aos="fade-left" key={'/'}> {word}</span></h2>
                    <p>Customers don't just want to shop: they want to feel that the brand understands them.</p>
                    <button className='btn btn-primary'onClick={()=>scrollToSection(recentRef)}>Go to shopping</button>
                    </div>
                    </div>
                </div>
            
       
      </section>

      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 g-5 px-5">
              <div className='word-spacing '>
            <h2 className='text-center text-uppercase '>
              Featured Products
            </h2>
            <p className='text-center text-uppercase '>Best from the Best!</p>
            </div>
                <div className="d-flex justify-content-between flex-wrap  ">
                <Swiper pagination={true}  navigation={true}  modules={[Pagination, Navigation]} className="mySwiper p-5" slidesPerView={3} spaceBetween={30}>

                    {product.slice(11,20).map((a)=>(
                       <div className="col-lg-3 g-2 mt-4">
                       <SwiperSlide>
                        <div className="product-card position-relative">
                      <img key={a.id} src={a.thumbnail} className='w-100' alt="" />
                      <div className="product-info position-absolute w-100 h-100 top-0 left-0 d-flex flex-column justify-content-center align-item-center text-white">
                      <p className='text-center'>{a.title}</p>
                      <p className='text-center'>Rs.{a.price}</p>
                      <p className='text-center'>Rating {a.rating}</p>
                      <button className='btn btn-primary' onClick={()=>dispatch({type: 'ADD_TO_CART',payload:a})}>Add to Cart</button>
                      </div>
                      </div>
                      </SwiperSlide>
                      </div>
                     
                    ))}
                     </Swiper>
                 
                </div>
            </div>
          </div>
        </div>

      </section>
      
      <section className='py-5'>
        <div className="container">
              <div className="row">       
                <div className="col-12 col-sm-6  offset-3  mt-3 text-secondary">
                     <p className='text-center text-sm-left px-3 lh-lg  '>
            Sed pellentesque lectus fringilla, varius metus in, malesuada est. Donec nisl nunc, egestas at molestie sit amet, eleifend et dui. Vivamus fringilla faucibus scelerisque. Nam convallis risus risus, eu sagittis eros luctus id.
            </p>
            </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center item-center gap-3 mt-3">
            
            <button  className='btn btn-secondary' onClick={()=>scrollToSection(highlighRef)}>  See more Featured</button> 
          
           
            <button className='btn btn-primary'onClick={()=>scrollToSection(checkRef)}>Check all Design!</button>
            </div>
          
            
        </div>
      </section>

      <section className='py-3' ref={recentRef}>
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
                            <button className='btn btn-primary' onClick={()=> dispatch({type: 'ADD_TO_CART',payload:a})}>Add to Cart</button>
                            </div>
                            </div>
                          
                            </div>
                           
                          ))}
                  
                       
                      </div>
                  </div>
                </div>
              </div>
      
            </section>
      
            <section className='sec' ref={highlighRef}>
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

            <section className='py-5'>
              <div className="container">
              <div className="row">
                <div className="col-lg-12">
                <div className='word-spacing '>
                      <h2 className='text-center text-uppercase '>
                      What Clients Say
                  </h2>
                  <p className='text-center text-uppercase '>a great place to show best opinions</p>
    
                  </div>
                </div>
                {product.slice(3,6).map((a)=>(
                     <div className="col-lg-3  offset-lg-1  mt-5 review " key={a.id}>
                      <h5>{a.reviews[0]?.comment}</h5>
                      <p>Date: {a.reviews[0]?.date}</p>
                      <p>Reviewer: {a.reviews[0]?.reviewerName}</p>
                      <p> {a.reviews[0]?.reviewerEmail}</p>
                      <h5>Rating: {a.reviews[0]?.rating}</h5>
                        </div>
                ))}
               
                </div>
              </div>
            </section>

                <section className='py-5'>
                  <div className="row">
                    <div className="col-lg-12">
                      <img className='w-100 h-60' src="https://img.lazcdn.com/us/domino/6623f7bd-c73f-49ec-b158-e7ff89ce5762_NP-1976-688.jpg_2200x2200q80.jpg" alt="" />
                    </div>
                  </div>
                </section>
      
    </>
  )
}

export default Home
