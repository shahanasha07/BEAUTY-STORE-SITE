import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import prdctp from '../assets/product-p.jpg'
import prdctg from '../assets/product-g.jpg'
import Skincareg from '../assets/Skincare-g.jpg'
import haircaregld from '../assets/haircare-gld.jpg'
import haircareg from '../assets/haircare-g.jpg'
import haircarep from '../assets/haircare-p.jpg'
import haircarelp from '../assets/haircare-lp.jpg'
import star from '../assets/star.png'

function Hair() {
  return (
    <div className='px-3'>
      <nav>
        <Header />
      </nav>
      <section className='lg:px-14'>
        <div className='w-full bg-white pt-10 '>
          <div className=''>
            <p className='opacity-45'>Home/hair-care</p>
            <h1 className='text-5xl'>Hair Care</h1>
            <p className='uppercase mt-20'>Showing 1-8 of 13 results </p>
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
              <img src={Skincareg} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div>
            <div className='w-1/2 p-3'>
              <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
              <img src={haircaregld} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* best selling */}
        <div className=' bg-white pt-10'>
          <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
            <div className='w-1/2 p-3'>
              <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
              <img src={haircareg} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div>
            <div className='w-1/2 p-3'>
              <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
              <img src={haircarep} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div>
            <div className='w-1/2 p-3'>
              <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
              <img src={haircarelp} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div>
            {/* <div className='w-1/2 p-3'>
              <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
              <img src={Skincarepr} alt="" />
              <ul>
                <li><img src={star} alt="" /></li>
                <li>Product Name 1</li>
                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Hair