import React from 'react'
import Landing from './Pages/Landing'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import HotelBooking from './Pages/HotelBooking'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Landing/>} path='/' />
      <Route element={<HotelBooking/>} path='/booking' />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
