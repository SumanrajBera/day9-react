import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../api'


export const AllProductsContext = createContext()

const AllProducts = ({children}) => {

    const [allProducts, setAllProducts] = useState([])

    async function setData() {
        setAllProducts(await getData())
    }

    useEffect(()=>{
        setData()
    }, [])

    return (
        <AllProductsContext.Provider value={allProducts}>
            {children}
        </AllProductsContext.Provider>
    )
}

export default AllProducts