import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src="images/logo1.PNG" alt="motivscore logo" />
          </Link>
          <p className="m-0"></p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="profilebtn button is-success btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="headbtn button is-success" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="headbtn button is-success" to="/login">
                Login
              </Link>
              <Link className="headbtn button is-success" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
