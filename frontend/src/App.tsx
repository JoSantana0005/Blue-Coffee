import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/index'
import NotFound from './pages/404'
import Login from './pages/login'
import Register from './pages/register'
import CartContextProvider from './context/CartContext'
import Payment from './pages/payment'
import Product from './pages/product'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/product/:product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
