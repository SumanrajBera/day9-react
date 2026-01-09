import React from 'react'

const ViewProduct = ({product, rating}) => {
    return (
        <div className='productDets'>
            <div className="image">
                <img src={product.image} alt="" />
            </div>
            <div className="details">
                <h1>{product.title}</h1>
                <p className='desc'>{product.description}</p>
                <p className='price'><strong>Price:</strong> <span>Rs.{product.price}</span></p>
                <div className="rating">
                    <p><strong>Rating:</strong> <span  className="stars">{new Array(Math.floor(rating)).fill(<i class="ri-star-fill"></i>)}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct