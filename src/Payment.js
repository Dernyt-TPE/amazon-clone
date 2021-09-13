import React, { useState, useEffect } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import ProductCheckout from './ProductCheckout'
import { Link, useHistory } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from "./firebase";


function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // const getClientSecret = async () => {
        //     const response = await axios({
        //         method: 'post',
        //         url: `/payments/create?total=${getCartTotal(cart) * 100}`
        //     });
        //     setClientSecret(response.data.clientSecret)
        // }
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create ? total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log('THE SECRET IS >>>', clientSecret)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'Empty-Cart'
            })

            history.replace('/orders');
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }


    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Checkout (<Link to="/checkout">{cart?.length} items</Link>)</h1>
                <div className="payment-row">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>0123 7RAC</p>
                        <p>New Delhi, India</p>
                    </div>
                </div>




                <div className="payment-row">
                    <div className="payment-title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment-items">
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
                </div>


                <div className="payment-row">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">

                        <form onSubmit={handleSubmit} onChange={handleChange}>
                            <CardElement />
                            <div className="payment-price-row">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandsSeparator={true}
                                    prefix={"₹ "}

                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Confirm Payment"}</span>
                                </button>
                            </div>


                            {error && <div>{error} </div>}
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment
