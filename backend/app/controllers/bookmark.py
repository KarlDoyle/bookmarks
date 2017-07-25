"""Bookmark Controller"""
from sqlalchemy import exc
from app.database import db_session
from app.models.bookmark import Bookmark


class BookmarkController(Bookmark):
    """Controller to intereact with the Bookmark Model"""

    @classmethod
    def create(cls, url, title, description, user_id):
        """User creates a new bookmark"""
        try:
            bookmark = cls(url, title, description, user_id)
            db_session.add(bookmark)
            db_session.commit()
            return bookmark
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def delete(cls, bookmark_id, user_id):
        """Delete bookmark"""
        try:
            bookmark = cls.query.filter_by(bookmark_id=bookmark_id)
            bookmark = bookmark.filter_by(user_id=user_id).one()
            db_session.delete(bookmark)
            db_session.commit()
            return bookmark
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def update(cls, bookmark_id, user_id, update_type):
        """Delete bookmark"""
        try:
            bookmark = cls.query.filter_by(bookmark_id=bookmark_id)
            bookmark = bookmark.filter_by(user_id=user_id).one()
            if update_type == "archived":
                bookmark.archived = not bookmark.archived
            elif update_type == "favourited":
                bookmark.favourited = not bookmark.favourited
            db_session.add(bookmark)
            db_session.commit()
            return bookmark
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def get_id(cls, title):
        """Retrieve the bookmark ID"""
        try:
            bookmark = cls.query.filter(cls.title == title)
            bookmark = bookmark.first()
            return bookmark.bookmark_id
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def one(cls, bookmark_id, user_id):
        """Get one bookmark"""
        try:
            bookmark = cls.query.filter(cls.user_id == user_id)
            bookmark = bookmark.filter(cls.bookmark_id == bookmark_id)
            return bookmark.first()
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def all(cls, user_id):
        """get all of users bookmarks"""
        try:
            bookmarks = cls.query.filter(cls.user_id == user_id)
            # .order_by(Player.name)
            bookmarks = bookmarks.order_by(cls.submission_date.desc())
            return bookmarks
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None
