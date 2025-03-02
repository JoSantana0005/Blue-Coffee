import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/index'
import NotFound from './pages/404'
import Login from './pages/login'
import Register from './pages/register'
import CartContextProvider from './context/CartContext'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
