import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { FACEBOOK_APP_ID, FACEBOOK_SCOPE } from '../constants';
import logo from '../assets/logo.svg';
import profile from '../assets/profile.png';
import '../assets/header.css';
import '../assets/button.css';
import '../assets/bookmark.css';


const Bookmark = (
    <article className="bookmark">
      <header className="bookmark-header">
        <ul>
          <li>5 mins ago</li>
          <li>10 min read</li>
          <li>by <a href="#">User</a> in <a href="#">Team</a> in <a href="#">Collection</a></li>
        </ul>
      </header>
      <section className="bookmark-body">
        <h3 className="bookmark-body-title">
          <a href="#">Donec facilisis tortor ut augue lacinia, at viverra est semper.</a>
        </h3>
        <p className="bookmark-body-description">
          Bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris.
          Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla.
          Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.
        </p>
      </section>
      <footer className="bookmark-footer">
        <a href="#">Read more..</a>
      </footer>
    </article>
)


class Template extends Component {
  render() {
    return (
      <div className="container">
        <header className="site-header site-header--fixed">
          <img className="site-header-logo" src={logo} />
          <div className="site-header-actions">
            <span>Adding link, be patient...</span>
            <input type="text" placeholder="http:example.com" />
            <button className="button button--default">Add link</button>
            <button className="button button--primary">Invite Friends</button>
            <FacebookLogin cssClass="button button--facebook" appId={FACEBOOK_APP_ID} autoLoad={false} scope={FACEBOOK_SCOPE} />
            <a className="site-header-profile"><img src={profile} /></a>
          </div>
        </header>
        <div className="grid-row">
          <section className="grid-column grid-column-8">
            {Bookmark}{Bookmark}{Bookmark}{Bookmark}{Bookmark}
            {Bookmark}{Bookmark}{Bookmark}{Bookmark}{Bookmark}
          </section>
          <aside className="grid-column grid-column-4">
            <section className="category-group">
              <h4 className="category-group-title">Teams</h4>
              <ul className="category-group-ul">
                <li><a href="#">Team Name</a><a href="#">edit</a></li>
                <li><a href="#">Team Name</a><a href="#">edit</a></li>
                <li><a href="#">Team Name</a><a href="#">edit</a></li>
                <li><a href="#">Team Name</a><a href="#">edit</a></li>
                <li><a href="#">Team Name</a><a href="#">edit</a></li>
              </ul>
              <button className="button button--link">New Team</button>
            </section>
            <section className="category-group">
              <h4 className="category-group-title">Collections</h4>
              <button className="button button--interest">ReactJS</button>
              <button className="button button--interest">Javascript</button>
              <button className="button button--interest">ES6</button>
              <button className="button button--interest">Design Patterns</button>
              <button className="button button--interest">Ruby on Rails</button>
              <button className="button button--interest">Inspiration Websites</button>
              <button className="button button--interest">CSS3</button>
              <button className="button button--interest">Scrum</button>
              <button className="button button--interest">Work</button>
              <button className="button button--interest">Python</button>
              <br/>
              <button className="button button--link">New Collection</button>
            </section>
          </aside>
        </div>
      </div>
    );
  }
}


export default Template;