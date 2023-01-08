import {React, useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    password: '',
    password2: ''
  });
  const { uname, email, password, password2 } = formData;
  const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async (e) => {
  e.preventDefault();
  if (password !== password2) {
   // setAlert('Passwords do not match', 'danger');
  } else {
   // register({ uname, email, password });
  }
};

  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="uname"
            value={uname}
            onChange={onChange}
            pattern="^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$"
            title="Enter UserName Without Space"
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength='8'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};
export default Register