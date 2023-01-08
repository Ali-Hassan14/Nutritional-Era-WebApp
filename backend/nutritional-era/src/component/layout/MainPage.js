import React from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Nutritional Era</h1>
          <p className="lead">
            Create a daily basis food logs and manage your nutrition and calories to remain fit and healthy...!!!
            <hr/>
            Create a profile/portfolio as a Nutritionist, share posts and be helpful for community members
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage