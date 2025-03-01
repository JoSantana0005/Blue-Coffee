import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
