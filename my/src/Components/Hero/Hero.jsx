import React from 'react';
import './Hero.css';
import hand_icon from '../Asset/hand_icon.png';
import arrow_icon from '../Asset/arrow.png';
import hero_img from '../Assets/dress/10.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={hero_img} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
