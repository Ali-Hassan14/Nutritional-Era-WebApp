import React from 'react'
import {Link} from 'react-router-dom';
// import mylogo from '../../img/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fa-brands fa-apple"></i> Nutritional Era</Link>
      </h1>
      <ul>
        <li><Link to="/profiles">Nutritionist</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;
