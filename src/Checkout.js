import React from 'react'
import './Checkout.css';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (

        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src="https://m.media-amazon.com/images/G/31/prime/Pay/LPA/WelcomePackNew/HO_Welcome_Pack_Desktop_New._CB406238166_.jpg"
                    alt="Join Amazon Prime"
                />
                <div>
                    <h2>Hello, {user?.email}</h2>
                    <h2 className="checkout-title">Your Shopping Cart</h2>
                </div>

                {cart.map(item => (
                    <ProductCheckout
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}


            </div>

            <div className="checkout-right">
                <div className="amazon-protection">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
                </div>
                <Subtotal />
            </div>


        </div>

    );
}

export default Checkout
