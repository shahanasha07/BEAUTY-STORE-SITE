import React from 'react'
import Header from '../Components/Header'
import contactimg from '../assets/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import map from '../assets/map.jpg'
import Footer from '../Components/Footer'
function Contact() {
  return (
    <div className='px-4 overflow-hidden '>
      <nav><Header /></nav>



      <div className="   bg-cover   bg-center " style={{ backgroundImage: `url(${contactimg})` }}>
        <div className=" px-8 md:px-24 py-24 md:py-56  text-white  bg-gray-30">
          <p className="s text-xs uppercase">
            Get in touch
          </p>
          <h1 className="capitalize  sm:text-4xl md:text-5xl lg:text-5xl  ">Message us </h1>

        </div>
      </div>


      <div className='  md:flex  items-center  py-4'>
        < div className='md:w-1/2 px-4 lg:px-14  py-24 '>
          <h1 className='text-5xl'>Contact Us
          </h1>
          <p className='mt-6 text-lg font-thin md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
          <ul className='my-6 text-xl '>
            <li className='my-2'><a href=""><FontAwesomeIcon icon={faLocationDot} />123 Fifth Avenue, New York, NY 10160</a></li>
            <li className='my-2'><a href=""><FontAwesomeIcon icon={faEnvelope} />Contact@info.com</a></li>
            <li className='my-2'><a href=""><FontAwesomeIcon icon={faPhone} />9-334-7565-9787</a></li>
          </ul>
        </div>
        <div className='md:w-1/2  bg-[#f6edf0] px-4 py-12 md:px-20 md:py-36 flex flex-col gap-4 '>
          <div className='flex justify-between'>
            <input type="text" placeholder='First Name' className='w-[48%] p-4 border-rose-300/25 border-2	 ' />
            <input type="text" placeholder='Last Name' className='w-[48%] p-4 border-rose-300/25 border-2 ' />

          </div>
          <input type="emai" placeholder='Enter your Email' className='p-4 border-rose-300/25 border-2' />
          <textarea name="" id="" placeholder='Message' className='py-12 px-2 border-rose-300/25 border-2'></textarea>
          <button className='bg-black text-white w-1/4 py-4 rounded-sm '>SEND</button>
        </div>
      </div>

      <div className='md:px-72 py-4'>
        <img src={map} alt="" />
      </div>

      <Footer />

    </div>
  )
}

export default Contact