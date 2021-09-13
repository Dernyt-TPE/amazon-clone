import React from 'react'
import './Footer.css'
import logo from './images/amazon logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-row">
                <div style={{ marginLeft: '200px' }} className="foot-col">
                    <div className="nav-head">Get to Know Us</div>
                    <ul className="column">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                    </ul>
                </div>


                <div className="foot-col">
                    <div className="nav-head">Connect with Us</div>
                    <ul className="column">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>

                    </ul>
                </div>

                <div className="foot-col">
                    <div className="nav-head">Make Money with Us</div>
                    <ul className="column">
                        <li>Sell on Amazon</li>
                        <li> Sell under Amazon Accelerator</li>
                        <li>Amazon Global Selling</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants </li>
                    </ul>
                </div>

                <div style={{ marginRight: '200px' }} className="foot-col">
                    <div className="nav-head">Let Us Help You</div>
                    <ul className="column">
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>

            </div>
            <hr style={{ color: '#37475A' }} />
            <div className="end">
                <img className="end-logo" src={logo} alt="Amazon logo" />
            </div>
            <div className="privacy-section">


                <p>Conditions of Use & Sale</p>   <p>Privacy Notice</p>   <p>Interest-Based Ads</p>
                <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>

            </div>

        </div>
    )
}

export default Footer
