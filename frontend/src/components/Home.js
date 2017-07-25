import React, { Component } from 'react';
import BookmarkList from './BookmarkList';

class Home extends Component {
  componentDidMount() {
    // investigate better approach to fetching bookmarks
    this.props.fetchBookmarks();
  }
  render() {
    return (
      <div className="grid-row">
        <section className="grid-column grid-column-8">
          <BookmarkList
            list={this.props.bookmarkList}
            updateBookmark={this.props.updateBookmark}
            deleteBookmark={this.props.deleteBookmark} />
        </section>
      </div>
    );
  }
}


export default Home;