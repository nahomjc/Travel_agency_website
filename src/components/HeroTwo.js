import React from 'react'
import '../App.css';
import { Button } from './Button'
import'./HeroTwo.css';


function HeroTwo() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-4.mp4' autoPlay loop muted/>
            <h1></h1>
            <p>
           
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

export default HeroTwo;
