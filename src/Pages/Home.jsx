import React from 'react'
import bg from '../assets/hero.jpg'
import Header from '../Components/Header'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import prdctp from '../assets/product-p.jpg'
import prdctg from '../assets/product-g.jpg'
import prdctb from '../assets/productb.jpg'
import prdctgn from '../assets/product-gn.jpg'
import star from '../assets/star.png'
import bg2 from '../assets/bg-03.jpg'
import goldstar from '../assets/gold-star.png'
import colloction1 from '../assets/collection1.jpg'
import colloction2 from '../assets/collection2.jpg'
import Whychoose from '../Components/Whychoose'
import Footer from '../Components/Footer'


function Home() {
    return (
        <div>
            <Header />
            <div className='px-4 overflow-hidden	 '>
                {/* <div className='text-white bg-gray-30'>

                    <div className='fixed  top-0  z-[-2]'>
                        <img src={bg} alt="" className='pr-4' />
                    </div>
                    <div className='w-[70%] bg-gray-30  sm:py-16 px-4 md:pt-16 md:px-8 sm:w-1/2 md:w-[60%] lg:pb-40 lg:px-14 xl:w-[45%] xl:px-20 xl:py-40'>
                        <span className='uppercase text-xs lg:mt-4 sm:text-lg'>New in town</span>
                        <h1 className='capitalize sm:text-4xl md:text-5xl lg:text-5xl lg:mt-3 xl:text-6xl'>
                            The new beauty collection
                        </h1>
                        <p className='sm:w-full text-xs mt-2 sm:text-lg lg:text-2xl lg:mt-4'>
                            This new collection brings with it the most exciting lorem ipsum dolor sit amet
                        </p>
                        <button className='bg-white text-black rounded-sm font-medium text-xs px-2 sm:py-2 mt-2 sm:py-3 sm:px-7 lg:mt-8 lg:py-4 lg:px-10' >
                            SHOP NOW
                        </button>
                    </div>
                </div> */}

                <div className="  bg-bottom bg-cover sm:bg-fixed sm:bg-center" style={{ backgroundImage: `url(${bg})` }}>
                    <div className=" text-white w-[90%]  py-24 px-4  md:px-8 sm:w-1/2   lg:px-14 xl:w-[45%] xl:px-20 xl:py-40">
                        <span className="uppercase text-xs lg:mt-4 sm:text-lg">New in town</span>
                        <h1 className="capitalize text-4xl lg:text-5xl lg:mt-3 xl:text-6xl">
                            The new beauty collection
                        </h1>
                        <p className=" mt-2 text-lg lg:text-2xl lg:mt-4">
                            This new collection brings with it the most exciting lorem ipsum dolor sit amet.
                        </p>
                        <button className="bg-white text-black rounded-sm font-bold text-xs  mt-2 md:mt-8 py-4 px-10">
                            SHOP NOW
                        </button>
                    </div>
                </div>



                {/* brands */}
                <div className='w-full  bg-white flex justify-between py-8 gap-3'>
                    <div className="w-1/2 lg:w-[16%]  border-2  border-x-rose-100 border-solid"><img src={logo1} alt="" /></div>
                    <div className="w-1/2 lg:w-[16%] border-2  border-x-rose-100 border-solid"><img src={logo2} alt="" /></div>
                    <div className="hidden md:inline md:w-1/2 lg:w-[16%] h- border-2  border-x-rose-100 border-solid"><img src={logo3} alt="" /></div>
                    <div className="hidden lg:inline lg:w-[16%] h- border-2  border-x-rose-100 border-solid"><img src={logo4} alt="" /></div>
                    <div className="hidden lg:inline lg:w-[16%] h- border-2  border-x-rose-100 border-solid"><img src={logo5} alt="" /></div>
                    <div className="hidden lg:inline lg:w-[16%] h- border-2  border-x-rose-100 border-solid"><img src={logo6} alt="" /></div>
                </div>

                {/* prodects */}

                <div className='w-full bg-white pt-10'>
                    <div className='text-center mt-'>
                        <p className='uppercase'>Popular Products</p>
                        <h1 className='text-5xl'>Trending Now</h1>
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
                </div>

                {/* best selling */}
                <div className='w-full bg-white pt-10'>
                    <div className='text-center mt-'>
                        <p className='uppercase'>shop</p>
                        <h1 className='text-5xl'>Best Selling</h1>
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
                </div>

                

            <div className="  bg-bottom bg-cover sm:bg-fixed sm:bg-center" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className=" text-white w-[90%]  py-24 px-4  md:px-8 sm:w-1/2   lg:px-14 xl:w-[45%] xl:px-20 xl:py-40">
                        <span className="uppercase text-xs lg:mt-4 sm:text-lg">New in town</span>
                        <h1 className="capitalize text-4xl lg:text-5xl lg:mt-3 xl:text-6xl">
                            The new beauty collection
                        </h1>
                        <p className=" mt-2 text-lg lg:text-2xl lg:mt-4">
                            This new collection brings with it the most exciting lorem ipsum dolor sit amet.
                        </p>
                        <button className="bg-white text-black rounded-sm font-bold text-xs  mt-2 md:mt-8 py-4 px-10">
                            SHOP NOW
                        </button>
                    </div>
                </div>

                {/* review */}
                <div className=' lg:h-screen  bg-white md:flex lg:items-center	pt-4'>
                    <div className='  md:w-2/3 md:h-2/4  lg:px-24'>
                        <p className='uppercase text-xs'> Jane Oliver</p>
                        <h1 className='text-3xl lg:text-5xl sm:pr-36 md:pr-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere...</h1>
                        <hr className='w-20 md:w-14 mt-3 bg-rose-300 h-[1.5px]	' />
                    </div>
                    <div className='md:w-1/2  lg:w-3/5 h-2/3 '>
                        <ul className='flex flex-col justify-center lg:justify-between h-full text-lg sm:pr-24  lg:pr-44 md:font-light	'>
                            <li className=''>
                                <img src={goldstar} alt="" className='w-20 mt-4' />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.
                                <p className='uppercase text-sm font-thin mt-2	'> James Oliver</p>
                                <hr className='w-20 md:w-14 mt-3 bg-rose-300 h-[1.5px]	' />
                            </li>
                            <li className=''>
                                <img src={goldstar} alt="" className='w-20 mt-4 md:mt-2' />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.
                                <p className='uppercase text-sm font-thin mt-2	'> James Oliver</p>
                                <hr className='w-20 md:w-14 mt-3 bg-rose-300 h-[1.5px]	' />
                            </li>
                            <li className=''>
                                <img src={goldstar} alt="" className='w-20 mt-4 md:mt-2' />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.
                                <p className='uppercase text-sm font-thin mt-2	'> James Oliver</p>
                                <hr className='w-20 md:w-14 mt-3 bg-rose-300 h-[1.5px] mb-2	' />
                            </li>
                           

                        </ul>
                    </div>
                </div>

                {/* new collection */}

                <div className='flex gap-4  flex-wrap sm:flex-nowrap pb-8	'>

                    <div>
                        <span className='absolute left-8  sm:py-4 lg:left-24 lg:py-24 bg-gray-00 text-white '>
                            <span className='uppercase'>new collections</span>
                            <p className='text-3xl lg:text-5xl  ' > Awesome <br />Makeup Kit <br /> Gift Sets</p>
                            <p className='font-light text-2xl sm:mt-2'>Find your unique style.</p>
                            <button className='bg-white text-black rounded-sm font-medium px-5 py-3 sm:mt-4'>SHOPE NOW</button>
                        </span>
                        <img src={colloction1} alt="" />

                    </div>


                    <div>
                        <span className='absolute pl-4 sm:py-4 lg:right-73  lg:pl-16 lg:py-24  text-white '>
                            <span className='uppercase'>new collections</span>
                            <p className='text-3xl lg:text-5xl  ' > The Ultimate <br /> Skincare <br /> Regime</p>
                            <p className='font-light text-2xl sm:mt-2'>Find your unique style.</p>
                            <button className='bg-white text-black rounded-sm font-medium px-5 py-3 sm:mt-4 ite'>SHOPE NOW</button>
                        </span>


                        <img src={colloction2} alt="" />

                    </div>
                </div>

                {/* why choose us */}
                <Whychoose />

                {/* footer */}

                <Footer />
            </div>
        </div>
    )
}

export default Home