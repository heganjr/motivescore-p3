import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button
            className="button is-success"
            onClick={() => history.goBack()}
          >
            &larr; Return
          </button>
        )}
        <h4>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            💤
          </span>{" "}
          by <a href="https://github.com/heganjr" target="_blank" rel="noreferrer">Jacob Hegan</a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
