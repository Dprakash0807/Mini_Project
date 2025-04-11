import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Asset/sharda.ico'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkMode/Dark'
import '../DarkMode/Dark.css'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItem}= useContext(ShopContext);
  return (
      <>
   
        <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt=""  />
        <p>Sharda </p>
        <p> Trade</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Dress</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}to='/womens'>Pagdi</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Other</Link>{menu==="kids"?<hr/>:<></>}</li>       
     </ul> 
<div className="nav-login-cart">
    <Link to='/login'><button>login</button></Link>
    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
   
    <div className="nav-cart-count">{getTotalCartItem()}</div>
  <div className="dark">
    <DarkModeToggle/></div>
</div>
    </div>
      </>
  
  )
}

export default Navbar
