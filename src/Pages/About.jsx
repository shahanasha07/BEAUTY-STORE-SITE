import React from 'react'
import Header from '../Components/Header'
import aboutbg from '../assets/about-bg.jpg'
import aboutbg2 from '../assets/about-bg2.jpg'
import aboutgirl from '../assets/about-girl.jpg'
import Footer from '../Components/Footer'
import Whychoose from '../Components/Whychoose'
function About() {
  return (
    <div className='px-3 overflow-hidden'>
      <nav><Header /></nav>


{/* 
      <div >

        <img src={aboutbg} alt="" />
      </div> */}
  
  <div className="   bg-cover   bg-center " style={{ backgroundImage: `url(${aboutbg})` }}>
        <div className=" px-8 md:px-24 py-24 md:py-56  text-white  bg-gray-30">
          <p className="s text-xs uppercase">
          A few words
          </p>
          <h1 className="capitalize  sm:text-4xl md:text-5xl lg:text-5xl  ">About us</h1>

        </div>
      </div>

      <div className=' bg-gray-white md:flex py-4 ' >
        <div className='md:w-1/2  px-4 lg:px-14 py-24'>
          <h1 className='text-5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr className='w-12 h-[1.5px] mt-4  bg-rose-300' />
        </div>
        <div className='md:w-1/2  px-6 bg-[#f6edf0] md:px-20 py-24  '>
          <h1 className='text-2xl'>Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</h1>
          <p className='text-xl mt-4 font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
          <p className='text-xl mt-4 font-thin'>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>

        </div>
      </div>



      <div className='md:px-12'>

        <div className="  md:h-screen bg-cover   bg-center " style={{ backgroundImage: `url(${aboutbg2})` }}>
          <div className=" relative md:top-80 lg:left-72 pt-28 text-white text-center  lg:w-1/2 bg-gray-30">

            <h1 className="capitalize  sm:text-4xl md:text-5xl lg:text-5xl lg:mt-3 ">About Our Products </h1>
            <hr className='w-16 ml-40 m-2 md:ml-72 md:mt-4' />
            <p className="sm:w-full text-xs md:mt-2 sm:text-lg lg:text-xl lg:mt-4">
              Proin at velit sed elit varius porttitor. Ut a suscipit quam, eu congue odio. Sed eget viverra est. Vivamus ut sodales neque. Sed vel dui et dolor placerat egestas id lacinia mauris.
            </p>

          </div>
        </div>

      </div>


      <div className=' flex flex-wrap-reverse	 py-4 md:px-12'>
        <div className='md:w-1/2  '>
          <img src={aboutgirl} alt="" className='w-full float-right' />
        </div>
        <div className='md:w-1/2  bg-[#f6edf0] py-16 px-4 flex items-center justify-center '>
          <div className='text-center  md:w-4/6  md:text-right'>
            <span className='uppercase '>About me</span>
            <h1 className='text-5xl' >Hi, I'm Diana!</h1>
            <h2 className='text-xl mt-2'>I'm a 32 years old women entrepreneur, living in Miami, Florida</h2>
            <p className='text-lg mt-8 font-light	'>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed. </p>
            <p className='text-lg mt-4 font-light	'>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>

          </div>
        </div>
      </div>
      <Whychoose />
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default About