"""Auth Provider Controller"""

from sqlalchemy import exc
from app.database import db_session
from app.models.auth_provider import AuthProvider


class AuthProviderController(AuthProvider):
    """ class handling auth provider controller """

    @classmethod
    def create(cls, provider, provider_id, user_id):
        """ Create new user in db """
        try:
            user = cls(
                provider=provider,
                provider_id=provider_id,
                user_id=user_id)
            db_session.add(user)
            db_session.commit()
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None

    @classmethod
    def exists(cls, provider, provider_id):
        """Query a users id from email """
        try:
            user = db_session.query(cls)
            user = user.filter_by(provider=provider)
            user = user.filter_by(provider_id=provider_id)
            user = user.one()
            return user.user_id
        except (exc.SQLAlchemyError, exc.DBAPIError):
            return None
