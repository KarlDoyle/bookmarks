""" Bookmark model """

from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
import datetime

from app.database import Base
from app.models.user import User


class Bookmark(Base):
    """ Define User table """

    __tablename__ = 'bookmark'
    bookmark_id = Column(Integer, primary_key=True)
    url = Column(String(160), nullable=False)
    title = Column(String(400), nullable=False)
    description = Column(String(400), nullable=False)
    submission_date = Column(DateTime, default=datetime.datetime.now())
    favourited = Column(Boolean, default=False)
    archived = Column(Boolean, default=False)
    user_id = Column(Integer, ForeignKey('user.user_id'))
    user = relationship(User)

    def __init__(self, url, title, description, user_id):
        self.url = url
        self.title = title
        self.description = description
        self.user_id = user_id

    def __repr__(self):
        return '<Bookmark {url} id:{id} user:{user}>'.format(
            url=self.url,
            id=self.bookmark_id,
            user=self.user_id)

    def serialize(self):
        """ serialize data for json """
        return {
            'id': self.bookmark_id,
            'url': self.url,
            'title': self.title,
            'description': self.description,
            'submission_date': self.submission_date,
            'favourited': self.favourited,
            'archived': self.archived
        }
