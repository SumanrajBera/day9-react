import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllProductsContext } from '../context/AllProducts';
import ViewProduct from '../components/ViewProduct';

const Product = () => {
  let allProducts = useContext(AllProductsContext)
  let { id } = useParams();
  const [product, setProduct] = useState({})
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (!allProducts.length) return;
    const currentProduct = allProducts.find(
      el => String(el.id) === String(id)
    );
    console.log(currentProduct)

    setProduct(currentProduct)
    setRating(currentProduct.rating.rate)

  }, [id, allProducts])

  return (
    <ViewProduct product={product} rating={rating}/>
  )
}

export default Product