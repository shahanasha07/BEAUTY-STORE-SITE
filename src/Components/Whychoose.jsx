import { faArrowLeft, faDolly, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Whychoose() {
    return (
        <div>

            <div className=' lg:flex text-center md:text-start gap-4 py-10 md:py-20 '>
                <div className='lg:w-1/2 font-thin md:pl-72 lg:pl-20 '><p>WHY CHOOSE US</p>
                    <hr className='w-1/6 h-[1.5px]  bg-rose-300 ml-40 my-2 md:ml-4 lg-ml-0' />

                </div>
                <div className='md:flex   '>

               
                <div className='md:w-1/2 '>
                    <ul className='flex  flex-col items-center md:flex-row md:items-start'>
                        <li className='w-[10%]  h-10 md:h-6 lg:w-[25%] lg:h-10 rounded-full bg-[#d4a6b6] flex justify-center items-center text-white'> <FontAwesomeIcon icon={faTruck} /> </li>
                        <li>
                            <h1 className='text-2xl'>Fast Delivery</h1>
                            <p className=' text-lg font-thin md:w-2/3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='md:w-1/2'>
                    <ul className='flex  flex-col items-center md:flex-row md:items-start'>
                        <li className='w-[10%]  h-10 md:h-6 lg:w-[25%] lg:h-10 rounded-full bg-[#d4a6b6] flex justify-center items-center text-white'>  <FontAwesomeIcon icon={faDolly} /> </li>
                        <li>
                            <h1 className='text-2xl'>Free Shipping</h1>
                            <p className=' text-lg font-thin md:w-2/3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='md:w-1/2'>
                    <ul className='flex  flex-col items-center md:flex-row md:items-start'>
                        <li className='w-[10%]  h-10 md:h-6 lg:w-[25%] lg:h-10 rounded-full bg-[#d4a6b6] flex justify-center items-center text-white'> <FontAwesomeIcon icon={faArrowLeft}  /> </li>
                        <li>
                            <h1 className='text-2xl'>Easy Returns</h1>
                            <p className=' text-lg font-thin md:w-2/3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </li>
                    </ul>
                </div>

                </div>

            </div>
        </div>
    )
}
