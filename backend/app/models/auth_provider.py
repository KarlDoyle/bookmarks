""" User model """

from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base
from app.models.user import User


class AuthProvider(Base):
    """ Define User table """
    __tablename__ = 'auth_provider'
    auth_id = Column(Integer, primary_key=True)
    provider = Column(Enum('facebook', 'email', 'google', name='providers'))
    provider_id = Column(String(250), nullable=False, unique=True)
    user_id = Column(Integer, ForeignKey('user.user_id'))
    user = relationship(User)

    def __init__(self, provider, provider_id, user_id):
        self.provider = provider
        self.provider_id = provider_id
        self.user_id = user_id

    def __repr__(self):
        name = str(self.first_name + ' ' + self.last_name)
        return '<AuthProvider {provider} user:{name}>'.format(
            provider=self.provider,
            name=name)
