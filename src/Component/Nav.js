import React  from 'react'
import './nav.css'
import $ from 'jquery'
import Image from './assets/images/smarts-auto-logo3.png'
export default function nav() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
 
  return (
    <div>
      <div className='top-nav'>
        <p><b>SMART’S AUTO.</b> Smart People Smart Choices. 39 Cornwall Street Falmouth Trelawny Jamaica.</p>
<div className='top-icons'>
<a href='#'><i class="fa-brands fa-twitter"></i></a>
<a href='#'><i class="fa-brands fa-facebook"></i></a>
<a href='#'><i class="fa-brands fa-instagram"></i></a>
<a href='tel: 876376-5385'><i class="fa-solid fa-phone"></i></a>
<a href='mailto: smartsautocarsales@gmail.com'><i class="fa-solid fa-envelope"></i></a>
</div>
      </div>
      <nav className='navbar'>
        <div className='logo'><img src={Image} alt='logo'/></div>
        <ul className='nav-links'>
        <div className='nav-bars'>
        <i class="fa-solid fa-bars"></i>
        </div>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Smart's Auto Car Sale</a></li>
           <li><a href='#'>My Account</a></li>
            <li><a href='#'>Checkout</a></li>
           <li><a href='#'>Contact</a></li>
          <div className='cart'>
          <i class="fa-solid fa-cart-shopping"></i>
          <p>0</p>
        </div>
        </ul>
       
        </nav>
        <div className='search'>
          <div className='category wrapper'>
          <select name="category" id="parts" size="1">
  <option value="engine">Engine parts</option>
  <option value="electric">Electrical parts</option>
  <option value="body">Body</option>
  <option value="lubricant">Lubricant</option>
  <option value="bus">Bus</option>
  <option value="pickup">Pickup</option>
  <option value="suv">suv</option>
  <option value="car">Cars</option>
  <option value="maintenance">Maintenance</option>
  <option value="truck">Truck</option>
  <option value="tire">Tires</option>
  <option value="oil filter">Oil filter</option>
  <option value="coil">Ciol</option>
  <option value="battery">Battery</option>
  <option value="strut">Strut Mount</option>
  <option value="water pump">Water Pump</option>
  <option value="Disc Pad">Disc Pad</option>
  <option value="radiator">Radiator</option>
</select>
          </div>
          <div className='card-sale'>
         <a href='#'>Smart's Auto Car Sale</a>
          </div>
          <div className='search-input'>
          <form class="nosubmit">
  <input class="nosubmit" type="search" placeholder="Search..."/>
</form>
          </div>
        </div>


        
    </div>
  )
}
