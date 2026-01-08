import React, { useContext } from 'react'
import { AllProductsContext } from './context/AllProducts'
import { all } from 'axios'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'

const App = () => {
  // let allProducts = useContext(AllProductsContext)
  // console.log(allProducts)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' >
          <Route index element={<Catalog />} />
          <Route path=':id' element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App