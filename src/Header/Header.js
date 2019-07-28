import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {
    projects: [],
    isLoading: false
  };

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal"><Link className="p-2 text-dark" to="/">Project Manager</Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">Home</Link>
        <Link className="p-2 text-dark" to="/new-project">New Project</Link>
        </nav>
        {/*<a className="btn btn-outline-primary" href="#">Sign up</a>*/}
      </div>
    );
  }
}

export default Header;
