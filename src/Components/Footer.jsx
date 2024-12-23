import React from 'react'
import { Link } from 'react-router-dom'
import Shope from '../Pages/Shope'
import Makeup from '../Pages/Makeup'
import Skincare from '../Pages/Skincare'
import Hair from '../Pages/Hair'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import navlogo from '../assets/navlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div>
            <footer className='  bg-[#f6edf0] sm:px-14 sm:py-18 '>
                <div className=' bg-gray-80  py-8 px-6 sm:flex gap-2 '>
                    {/* <div className='w-1/2  h-full text-2xl flex items-center'> */}
                     <p  className='sm:w-1/2   text-2xl sm:flex items-center'>Subscribe to our newsletter</p> 
                      {/* </div>  */}
                    <div className='sm:w-1/2  flex flex-col sm:flex-row sm:items-center gap-2'>
                        <input type="email" placeholder='Your email address...' className='sm:w-2/3 px-4 py-3 text-lg  ' />
                        <button className='bg-black text-white px-12 py-4 rounded-sm '>SUBSCRIBE</button>
                    </div>
                </div>
                <hr className='w-full h-[1.2px] bg-rose-200 '/>
                <div className=' sm:h-[40vh sm:py-8   sm:flex gap-2'>
                    <div className='sm:w-1/2  flex flex-col sm:flex-row items-center'><img src={navlogo} alt="" /></div>
                    <div className=' sm:w-1/2 flex flex-col sm:flex-row justify-between items-center'>
                        <ul className='py-4 text-center sm:text-left'>
                            <li><Link to='/shope' element={<Shope />} >SHOPE ALL</Link> </li>
                            <li><Link to='/makeup' element={<Makeup />} >MAKEUP</Link> </li>
                            <li><Link to='/skin-care' element={<Skincare />} >SKIN CARE</Link> </li>
                            <li><Link to='/hair-care' element={<Hair />} >HAIR CARE</Link> </li>
                            <li><Link to='/about' element={<About />} > ABOUT</Link></li>
                            <li><Link to='/contact' element={<Contact />} >CONTACT</Link> </li>
                        </ul>
                        <ul className='py-4 text-center sm:text-left'>
                            <li><a href="">Refund policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li> <a href="">FAQ</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                        <ul className='flex gap-4 sm:pr-10  '>
                            <li><a href=""><FontAwesomeIcon icon={faFacebook} /> </a></li>
                            <li><a href=""><FontAwesomeIcon icon={faTwitter} /> </a></li>
                            <li> <a href=""><FontAwesomeIcon icon={faInstagram} /> </a></li>

                        </ul>

                    </div>
                </div>
                <hr className='w-full h-[1.4px]  bg-rose-200 '/>
                <div className='px-2 text-center py-6 '>
                <p>Copyright © 2024 Be Bold | Powered by Shahana</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer