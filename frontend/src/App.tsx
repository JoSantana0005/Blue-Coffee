import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/index'
import NotFound from './pages/404'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
