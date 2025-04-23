
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './LandingPage/Navbar'
import HomePage from './LandingPage/Home/HomePage'
// import Signup from './LandingPage/Signup/Signup'
import AboutPage from './LandingPage/About/AboutPage'
import ProductsPage from './LandingPage/Products/ProductsPage'
import PricingPage from './LandingPage/Pricing/PricingPage'
import SupportPage from './LandingPage/Support/SupportPage'
import Footer from './LandingPage/Footer'
import NotFound from './LandingPage/NotFound'


function App() {
  return (

 <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/signup' element={<Signup />} /> */}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductsPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />

      {/* 404 Not Found */}
     
     <Route path='*' element={ <NotFound/> } />
         
    </Routes>
    <Footer /> 
  </Router>
  
  </>
  
  
  )


  
}

export default App
