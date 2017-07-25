"""User Controller
"""

from sqlalchemy import exc
from app.database import db_session
from app.models.user import User


class UserController(User):
    """Controller to intereact with the User Model
    """
    @classmethod
    def create(cls, fname, lname, email, avatar):
        """Create new user in db

        Args:
            fname (string): Users first name
            lname (string): Users Last name
            email (string): Users Email address
            avatar (string): url of users avatar ( current FB )
        """
        try:
            user = cls(fname, lname, email, avatar)
            db_session.add(user)
            db_session.commit()
            return user
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def update(cls, user_id, data):
        """Edit a user

        Args:
            user_id (TYPE): Description
            data (TYPE): Description
        """
        try:
            db_session.query(cls).filter_by(user_id=user_id).update(data)
            db_session.commit()
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def delete(cls, user_id):
        """Delete a user

        Args:
            user_id (INT): User identifier
        """
        try:
            user = db_session.query(cls).filter_by(user_id=user_id).one()
            db_session.delete(user)
            db_session.commit()
            return "User deleted"
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def get_id(cls, email):
        """Query a users id from email

        Args:
            email (Sring): Users email
        """
        try:
            user = cls.query.filter(cls.email == email)
            user = user.first()
            return user.user_id
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def one(cls, user_id):
        """Query a users information

        Args:
            user_id (INT): User identifier
        """
        try:
            user = cls.query.filter(cls.user_id == user_id)
            return user.first()
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def all(cls):
        """All users"""
        try:
            return cls.query.all()
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None
