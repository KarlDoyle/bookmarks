import React from 'react';
import Bookmark from './Bookmark';


const BookmarkList = (props) => {
  return (
    <div>
      {props.list ? props.list.map((bookmark) =>
        <Bookmark
          key={bookmark.id}
          updateBookmark={props.updateBookmark}
          deleteBookmark={props.deleteBookmark}
          {...bookmark} />
      ) : null}
    </div>
  )
}

export default BookmarkList;