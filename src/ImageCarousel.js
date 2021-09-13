import React from 'react'
import './ImageCarousel.css'
import { useState } from 'react';
import { ima } from './Check.js'
import { Link } from 'react-router-dom'
function ImageCarousel() {
    const [current, setState] = useState(0);


    const imgSlider = (n) => {
        let index = current + n;
        if (index < 0) {
            index = ima.length - 1;
            setState(index)
        }

        if (index === ima.length) {
            index = 0;
            setState(index)
        }

        else { setState(index) }

    }


    return (


        <div className="slideshow-container">

            <div className="mySlides fade">
                <Link to='#'>
                    <img src={ima[current].img} alt="background-images-slider" />
                </Link>
            </div>



            <p className="prev" onClick={() => { imgSlider(-1) }}>&#10094;</p>
            <p className="next" onClick={() => { imgSlider(1) }}>&#10095;</p>

        </div>
    )
}

export default ImageCarousel
