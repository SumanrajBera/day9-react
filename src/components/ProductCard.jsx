import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data }) => {
    let navigate = useNavigate()
    return (
        <div className='card'>
            <div className="upper">
                <img src={data.image} alt="" />
                <p className='title'>{data.title}</p>
            </div>

            <div className="btnGrp">
                <button>Buy Now</button>
                <button onClick={() => {
                    navigate(`/catalog/${data.id}`)
                }}>More Info</button>
            </div>
        </div>
    )
}

export default ProductCard