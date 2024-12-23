
import React from 'react'
import { BrowserRouter as  Router, Routes, Route  } from 'react-router-dom'
import Home from './Pages/Home'
import Shope from './Pages/Shope'
import Makeup from './Pages/Makeup'
import Skincare from './Pages/Skincare'
import Hair from './Pages/Hair'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Router>
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shope' element={<Shope/>} />
          <Route path='/makeup' element={<Makeup/>} />
          <Route path='/skin-care' element={<Skincare/>} />
          <Route path='/hair-care' element={<Hair/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


