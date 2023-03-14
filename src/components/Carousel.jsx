import React from 'react'
import bg from '../assets/images/bg.jpg'
export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bg} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}
