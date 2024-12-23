import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import prdctp from '../assets/product-p.jpg'
import prdctg from '../assets/product-g.jpg'
import prdctb from '../assets/productb.jpg'
import prdctgn from '../assets/product-gn.jpg'
import star from '../assets/star.png'
import prdctr from '../assets/Skincare-r.jpg'
import prdctgrn from '../assets/Skincare-g.jpg'
import prdctdg from '../assets/Skincare-dg.jpg'
import prdctw from '../assets/Skincare-w.jpg'

function Shope() {
  return (
    <div className='px-3'>
      <nav>
      <Header/>
      </nav>
      <section className='lg:px-14'> 
      <div className=' bg-white pt-10 '>
      <div className=''>
                      <p className='opacity-45'>Home/shope</p>
                        <h1 className='text-5xl'>shop</h1>
                        <p className='uppercase mt-20'>Showing 1-8 of 20 resultsDefault sorting </p>
                    </div>
                    <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctp} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctg} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctb} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctgn} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctr} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctgrn} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctdg} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctw} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* best selling */}
                {/* <div className='w-full bg-white pt-10 px-20'>
                    <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctg} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctp} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctb} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={prdctgn} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
      </section>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default Shope