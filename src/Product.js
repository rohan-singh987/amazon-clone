import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>OnePlus 9R 5G</p>
                <p className='product_price'></p>
                <p>
                    <small>₹</small>
                    <strong>39,999</strong>
                </p>
                <div className="product_rating">
                <p>⭐</p>
                </div>
            </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SX679_.jpg" alt="" />
                <button>Add to Basket</button>
        </div>
    )
}

export default Product
