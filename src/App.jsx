import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App