import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPortfolio } from '../../actions/profile';

const ProfilePortfolio = ({ username, getPortfolio, portfolio }) => {
  useEffect(() => {
    getPortfolio(username);
  }, [getPortfolio, username]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Profile Portfolio-Cases</h2>
      {portfolio.map(portfolio => (
        <div key={portfolio.id} className="repo bg-white p-1 my-1">
          <div>
            <h4>
              <a href={portfolio.html_url} target="_blank" rel="noopener noreferrer">
                {portfolio.name}
              </a>
            </h4>
            <p>{portfolio.description}</p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
                Stars: {portfolio.stargazers_count}
              </li>
              <li className="badge badge-dark">
                Watchers: {portfolio.watchers_count}
              </li>
              <li className="badge badge-light">Forks: {portfolio.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfilePortfolio.propTypes = {
  getPortfolio: PropTypes.func.isRequired,
  portfolio: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.profile.portfolio
});

export default connect(mapStateToProps, { getPortfolio })(ProfilePortfolio);