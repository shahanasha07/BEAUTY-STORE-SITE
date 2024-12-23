import React from 'react'
import star from '../assets/star.png'
import prdctg from '../assets/product-g.jpg'
import prdctb from '../assets/productb.jpg'
import prdctgn from '../assets/product-gn.jpg'
import Skincarer from '../assets/Skincare-r.jpg'
import Skincareg from '../assets/Skincare-g.jpg'
import Skincaredg from '../assets/Skincare-dg.jpg'
import Skincarew from '../assets/Skincare-w.jpg'
import Skincarepr from '../assets/Skincare-pr.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Skincare() {
    return (
        <div className='px-3 '>
            <nav>
                <Header />
            </nav>
            <section className='lg:px-14'>
                <div className='w-full bg-white pt-10 '>
                    <div className=''>
                        <p className='opacity-45'>Home/skin-care</p>
                        <h1 className='text-5xl'>Skin Care</h1>
                        <p className='uppercase mt-20'>Showing 1–8 of 13 results </p>
                    </div>
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
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={Skincarer} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* best selling */}
                <div className=' bg-white pt-10 '>
                    <div className='flex flex-wrap sm:flex-nowrap	 sm:gap-4 mt-10'>
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
                            <img src={Skincaredg} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={Skincarew} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                        <div className='w-1/2 p-3'>
                            <span className='relative top-8 bg-white rounded-2xl px-2 py-1 ml-4 mt-10'> sale!</span>
                            <img src={Skincarepr} alt="" />
                            <ul>
                                <li><img src={star} alt="" /></li>
                                <li>Product Name 1</li>
                                <li><strike className='opacity-45'>$75.00</strike>$59.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Skincare