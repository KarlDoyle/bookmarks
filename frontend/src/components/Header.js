import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import CreateBookmark from './CreateBookmark';
import logo from '../assets/logo.svg';
import '../assets/header.css';
import '../assets/button.css';

const isLoggedIn = (props) => (
  <div className="site-header-actions">
    <CreateBookmark
      loading={props.loading}
      handleSubmit={props.handleSubmit}
      handleChange={props.handleChange} />
    <div className="site-header-profile">
      <img src={props.avatar} alt="Avatar" />
      <ul className="site-header-profile-ul">
        <li><a href="#">My Account</a></li>
        <li><a href="#" onClick={props.logout}>Logout</a></li>
      </ul>
    </div>
  </div>
);

const notLoggedIn = <div className="site-header-actions"><LoginContainer /></div>;

const Header = (props) => {
  return (
      <header className="site-header">
        <img className="site-header-logo" src={logo} alt="Logo" />
        { props.isAuthenticated ? isLoggedIn(props) : notLoggedIn }
      </header>
  );
}

export default Header;