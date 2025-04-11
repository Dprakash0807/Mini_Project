import React from 'react';
import './Offer.css';
import exclucive_image from '../Assets/dress/2.png';

const Offer = () => {
  return ( 
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <div className="img">
          <img src={exclucive_image} alt="Exclusive Offer" />
        </div>
      </div>
    </div>
  );
}

export default Offer;