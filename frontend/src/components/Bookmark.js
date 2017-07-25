import React from 'react';
import relativeDate from 'relative-date';
import '../assets/bookmark.css';
import '../assets/animations.css'

let convertDate = (dateString) => {
  let dt = dateString;
  let nd = new Date(dt)
  return relativeDate(nd)
}

const Bookmark = (props) => (
  <article className="bookmark">
    <header className="bookmark-header">
      <ul>
        <li>{convertDate(props.submission_date)}</li>
        <li>
          <a href="#" onClick={() => {props.updateBookmark(event, props.id, 'archived') }}>
            { props["archived"] ? 'Archived' : 'Archive' }
          </a>
        </li>
        <li>
          <a href="#" onClick={() => {props.updateBookmark(event, props.id, 'favourited') }}>
            { props["favourited"] ? 'Unfavourite' : 'Favourite' }
          </a>
        </li>
        <li>
          <a href="#" onClick={() => {props.deleteBookmark(event, props.id) }}>
            Delete
          </a>
        </li>
      </ul>
    </header>
    <section className="bookmark-body">
      <h3 className="bookmark-body-title">
        <a href={props.url} target="_blank">{props.title}</a>
      </h3>
      <p className="bookmark-body-description">
        {props.description}
      </p>
    </section>
    <footer className="bookmark-footer">
      <a href={props.url} target="_blank">Read more..</a>
    </footer>
  </article>
);

export default Bookmark;