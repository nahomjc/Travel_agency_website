import React from 'react'
import '../App.css';
import { Button } from './Button'
import'./HeroOne.css';


function HeroOne() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>ENJOY OUR PRODUCTS </h1>
            <p>
                what are your waiting for?
            </p>
<div  className='hero-btns'>
   <Button
   className='btns'
   buttonStyle='btn--outline'
   buttonSize='btn--large'
> GET STARTED</Button> 
<Button
   className='btns'
   buttonStyle='btn--primary'
   buttonSize='btn--large'
> WATCH TRAILER<i className='far fa-play-circle'/></Button> 
</div>
        </div>
    )
}

export default HeroOne
