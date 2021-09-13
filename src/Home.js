import React from 'react'
import './Home.css'
import Product from './Product'
import ImageCarousel from './ImageCarousel'
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
    return (
        <>
            <div id="nav-top"></div>
            <div className="home">

                <div className="home-container">
                    <ImageCarousel />


                    <div className="home-row">
                        <Product
                            id="12321341"
                            title="Victus by HP Ryzen 7 5800H 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/4GB RTX 3050Ti Graphics/Flicker Free Display/144Hz"
                            price={91990.0}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/713aQxv9KHS._SL1324_.jpg" />

                        <Product
                            id="4953809"
                            title="Logitech G402 Hyperion Fury Wired Gaming Mouse, 4,000 DPI, Lightweight, 8 Programmable Buttons, Compatible with PC/Mac - Black "
                            price={2239.0}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/61CqLgubwoL._SL1500_.jpg"
                        />
                        <Product
                            id="954332"
                            title="LG Ultragear 27-inch, Nano IPS -True 1 ms, 144 Hz, G-Sync Compatible, HDR 10, QHD Monitor, HDMI x 2,DP, Height Adjust & Pivot Stand"
                            price={38499.0}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/81ZYbkU1uKL._SL1500_.jpg"
                        />



                    </div>


                    <div className="home-row">
                        <Product
                            id="345094"
                            title="Nutella Hazelnut Spread with Cocoa, 750g "
                            price={689.0}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/41v8vHL+5IL.jpg"
                        />
                        <Product
                            id="4903850"
                            title="Happilo 100% Natural Premium Whole Cashews Value Pack Pouch, 500 g "
                            price={499.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/71xBJDPtTLS._SL1500_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Snickers Miniatures Chocolates Rakhi Gift Pack, 510g (Pack of 3) "
                            price={537}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/612iOJ4oQ1L._SL1000_.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="Pedigree Adult Dry Dog Food, Chicken & Vegetables, 20kg Pack "
                            price={3258}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/817iXyDHKjL._SL1500_.jpg"
                        />

                    </div>

                    <div className="home-row">

                        <Product
                            id="90829332"
                            title="Blackberrys Men's Slim Fit Suit"
                            price={4599.0}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61HumxK-L6S._UL1500_.jpg"
                        />

                        <Product
                            id="234010"
                            title="Hidesign Women's Shoulder (CRO MEL RAN RED MARSALA) "
                            price={6435.0}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61ou+Sx3HgL._UL1000_.jpg"
                        />

                    </div>

                    {/* Footer */}
                    <br />
                    <Link to='#nav-top'>
                        <div className="back-to-top">Back to top</div>
                    </Link>



                </div>


            </div>
        </>
    )
}

export default Home
