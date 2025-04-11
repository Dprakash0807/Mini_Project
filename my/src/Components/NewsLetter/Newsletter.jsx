import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <strong><h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1></strong>
      <p>Subscribe to our newletter and stay updated</p>
    <div>
      <input type="email" placeholder='your Email Id' required />
      <button>Subscribe</button>
    </div>
    </div>

  )
}

export default Newsletter
