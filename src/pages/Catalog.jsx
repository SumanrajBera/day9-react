import React, { useContext } from 'react'
import { AllProductsContext } from '../context/AllProducts'
import ProductCard from '../components/ProductCard'

const Catalog = () => {
  let allProducts = useContext(AllProductsContext)
  console.log(allProducts)

  return (
    <div className='catalog'>
      {allProducts.length === 0 ? <h3>Loading products...</h3> : allProducts.map((el)=>{
        return <ProductCard data={el} />
      })}
    </div>
  )
}

export default Catalog