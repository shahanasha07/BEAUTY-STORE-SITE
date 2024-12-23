import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import star from '../assets/star.png'
import lipstick1 from '../assets/lipstick1.jpg'
import lipstick2 from '../assets/lipstick2.jpg'
import lipstick3 from '../assets/lipstick3.jpg'
import lipstick4 from '../assets/lipstick4.jpg'

function Makeup() {
  return (
    <div className='px-3'>
      <nav><Header/></nav>
    <section className='lg:px-14'>
    <div className='w-full bg-white pt-10 '>
                    <div className=''>
                      <p className='opacity-45'>Home/Makeup</p>
                        <h1 className='text-5xl'>Makeup</h1>
                        <p className='uppercase mt-20'>Showing all 4 results </p>
                    </div>
                    <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={lipstick1} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={lipstick2} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={lipstick3} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={lipstick4} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </section>


      <footer><Footer/></footer>
    </div>
  )
}

export default Makeup