import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/bgvideo.mp4' autoPlay loop muted />
      <h1>JOIN HANDS TO SAVE THE NATURE</h1>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
