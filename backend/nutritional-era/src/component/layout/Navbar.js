import {React, Fragment} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
// import mylogo from '../../img/logo.png'
const Navbar = ({auth:{isAuthenticated, loading},logout}) => {
  const authLinks=(
  <ul>
   <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
  </ul>
  );
    const guestLinks=( 
    <ul>
      <li><Link to="/profiles">Nutritionist</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fa-brands fa-apple"></i> Nutritional Era</Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  )
};
Navbar.propTypes = {
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth:state.auth
});
export default connect(mapStateToProps,{logout})(Navbar);
