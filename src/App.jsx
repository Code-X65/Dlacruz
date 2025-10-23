import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
const App = () => {
  return (
   <>
   <div>
    <Router>
    <Navbar />
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
      
    </Router>
   </div>
   </>
  )
}

export default App