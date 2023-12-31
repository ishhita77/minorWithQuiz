import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } =useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=" " />
        <p>SADHANA</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{ setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu === "shop" ? <hr /> : <></>} </li>
        <li onClick={() => {setMenu("plans")}}><Link style={{ textDecoration: 'none' }} to='/plans'>Plans</Link>{menu === "plans" ? <hr /> : <></>} </li>
        <li onClick={() => {setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>About</Link> {menu === "about" ? <hr /> : <></>}  </li>
        <li onClick={() => {setMenu("Blogs")}}><Link style={{ textDecoration: 'none' }} to='/Blogs'>Blogs</Link> {menu === "Blogs" ? <hr /> : <></>}  </li>
        <li><Link to="/quiz">Take Quiz</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /> </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
