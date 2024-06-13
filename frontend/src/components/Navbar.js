import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">CompanyApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
        </ul>
        <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Login</Link>
        <Link className="btn btn-outline-success my-2 my-sm-0" to="/signup">Signup</Link>

      </div>
    </nav>
  );
};

export default Navbar;
