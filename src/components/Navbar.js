import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top">
      <div className="container-fluid" style={{ background: "#437745" }}>
        <Link to="/" className="navbar-brand fw-bolder text-light fs-3">
          WSM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
            <li className="nav-item mx-4">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/aboutus" className="nav-link text-light">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown mx-4">
              <Link
                to="/"
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/basics_of_stock_market">
                    Basics of Stock Market
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/intraday_trading_masterclass"
                  >
                    Intraday Trading Masterclass (Live)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/option_trading_masterclass"
                  >
                    Option Trading Masterclass (Live)
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/forex_masterclass">
                    Forex Masterclass (Live)
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <Link className="dropdown-item">
                    <strong>Mentorships</strong>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/telegram_mentorship">
                    Telegram Mentorships
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/one-1_mentorship">
                    1 to 1 Private Mentorship
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link text-light" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link text-light" to="/contactus">
                Contact Us
              </Link>
            </li>
            <Link to="usercart" className="btn btn-primary">
              Cart
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
