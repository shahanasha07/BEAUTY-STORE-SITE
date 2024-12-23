import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import Navlogo from '../assets/navlogo.png'
import { Link } from 'react-router-dom'
import Shope from '../Pages/Shope'
import Makeup from '../Pages/Makeup'
import Skincare from '../Pages/Skincare'
import Hair from '../Pages/Hair'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import { useState } from 'react'
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className='px-4'>
            <nav className=' py-4 bg-white flex justify-between items-center px-8	'>

                <div>
                    <Link to='/'><img src={Navlogo} alt="" /> </Link>
                </div>
                <ul className='hidden lg:flex gap-6  '>
                    <li><Link to='/shope' element={<Shope/>} >SHOPE ALL</Link> </li>
                    <li><Link to='/makeup' element={<Makeup/>} >MAKEUP</Link> </li>
                    <li><Link to='/skin-care' element={<Skincare/>} >SKIN CARE</Link> </li>
                    <li><Link to='/hair-care' element={<Hair/>} >HAIR CARE</Link> </li>
                    <li><Link to='/about' element={<About/>} > ABOUT</Link></li>
                    <li><Link to='/contact' element={<Contact/>} >CONTACT</Link> </li>
                </ul>

                {/* <div className='hidden lg:inline'> */}
                <div className='hidden lg:flex items-center gap-4'>
                    <FontAwesomeIcon icon={faUser} />
                    <button>
                        $0.00 <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                </div>

                <div className='lg:hidden text-[#d4a6b6] text-2xl'>
                    <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <ul className='lg:hidden flex flex-col gap-4 bg-white px-4 py-4 shadow-md'>
                   <li><Link to='/shope' >SHOPE ALL</Link> </li>
                    <li><Link to='/makeup'  >MAKEUP</Link> </li>
                    <li><Link to='/skin-care'  >SKIN CARE</Link> </li>
                    <li><Link to='/hair-care'  >HAIR CARE</Link> </li>
                    <li><Link to='/about' > ABOUT</Link></li>
                    <li><Link to='/contact'  >CONTACT</Link> </li>
                    <div className='flex justify-between items-center mt-4'>
                        <FontAwesomeIcon icon={faUser} className='text-gray-600' />
                        <button>
                            $0.00 <FontAwesomeIcon icon={faBagShopping} />
                        </button>
                    </div>
                </ul>
            )}

        </div>
    )
}




export default Header







// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBagShopping, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
// import Navlogo from '../assets/navlogo.png';
// import { Link } from 'react-router-dom';

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className='w-full'>
//             <nav className='w-full py-4 bg-white flex justify-between items-center px-4'>
//                 {/* Logo */}
//                 <div>
//                     <img src={Navlogo} alt="Logo" />
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className='hidden lg:flex gap-6'>
//                     <li><Link to='/shope' >SHOPE ALL</Link> </li>
//                     <li><Link to='/makeup'  >MAKEUP</Link> </li>
//                     <li><Link to='/skin-care'  >SKIN CARE</Link> </li>
//                     <li><Link to='/hair-care'  >HAIR CARE</Link> </li>
//                     <li><Link to='/about' > ABOUT</Link></li>
//                     <li><Link to='/contact'  >CONTACT</Link> </li>
//                 </ul>

//                 {/* Desktop Icons */}
//                 <div className='hidden lg:flex items-center gap-4'>
//                     <FontAwesomeIcon icon={faUser} className='text-gray-600' />
//                     <button>
//                         $0.00 <FontAwesomeIcon icon={faBagShopping} />
//                     </button>
//                 </div>

//                 {/* Mobile Menu Toggle */}
//                 <div className='lg:hidden text-[#d4a6b6] text-2xl'>
//                     <button onClick={toggleMenu}>
//                         <FontAwesomeIcon icon={faBars} />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <ul className='lg:hidden flex flex-col gap-4 bg-white px-4 py-4 shadow-md'>
//                    <li><Link to='/shope' >SHOPE ALL</Link> </li>
//                     <li><Link to='/makeup'  >MAKEUP</Link> </li>
//                     <li><Link to='/skin-care'  >SKIN CARE</Link> </li>
//                     <li><Link to='/hair-care'  >HAIR CARE</Link> </li>
//                     <li><Link to='/about' > ABOUT</Link></li>
//                     <li><Link to='/contact'  >CONTACT</Link> </li>
//                     <div className='flex justify-between items-center mt-4'>
//                         <FontAwesomeIcon icon={faUser} className='text-gray-600' />
//                         <button>
//                             $0.00 <FontAwesomeIcon icon={faBagShopping} />
//                         </button>
//                     </div>
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default Header;
