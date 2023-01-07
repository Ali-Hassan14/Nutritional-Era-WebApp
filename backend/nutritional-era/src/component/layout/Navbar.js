import React from 'react'
import mylogo from '../../img/logo.png'
const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <h1>
        <a href="index.html"><i class="fa-brands fa-apple"></i> Nutritional Era</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Nutritionist</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
  )
}
export default Navbar;
