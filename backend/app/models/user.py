""" User model """

from sqlalchemy import Column, Integer, String
from app.database import Base


class User(Base):
    """ Define User table """

    __tablename__ = 'user'
    user_id = Column(Integer, primary_key=True)
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(250), nullable=False, unique=True)
    avatar = Column(String(250), nullable=True)

    def __init__(self, first_name, last_name, email, avatar):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.avatar = avatar

    def __repr__(self):
        name = str(self.first_name + ' ' + self.last_name)
        return '<User {name} id:{id}>'.format(name=name, id=self.user_id)

    def serialize(self):
        """ serialize data for json """
        return {
            'id': self.user_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'avatar': self.avatar
        }
