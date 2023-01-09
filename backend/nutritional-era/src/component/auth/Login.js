import {React , useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const { email, password} = formData;
    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async (e) => {
    e.preventDefault();
   login(email,password)
  };

  // <!!!!!!!!!!!!!!.............. Redirect if LoggedIn...............!!!!!!!!!!!!!>
  if (isAuthenticated){
   return <Navigate to="/dashboard" />;
  }
  return (
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign In To Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"
              title="Enter Valid Email Address" 
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength='8'
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    );
  };

  login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
  }

const mapStateToProps = state =>({
  isAuthenticated:state.auth.isAuthenticated
});
export default connect(mapStateToProps,{login}) (Login);