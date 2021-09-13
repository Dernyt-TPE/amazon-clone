import React from 'react'
import './ProductCheckout.css'
import { useStateValue } from "./StateProvider";


function ProductCheckout({ id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {

        dispatch({
            type: 'Remove-From-Cart',
            id: id,
        })
    }

    return (
        <div className='product-checkout'>
            <img className='product-checkout-image' src={image} alt='product' />

            <div className='product-checkout-info'>
                <p className='product-checkout-title'>{title}</p>
                <p className="product-checkout-price">
                    <strong>₹ </strong>
                    <strong>{price}</strong>
                </p>
                <div className="product-checkout-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default ProductCheckout
