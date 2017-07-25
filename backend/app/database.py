"""Database for starting backend application"""

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from config import DATABASE_URI

engine = create_engine(DATABASE_URI, convert_unicode=True)
sess_maker = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db_session = scoped_session(sess_maker)
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    """ create the database """
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()

    from app.models.auth_provider import AuthProvider
    from app.models.bookmark import Bookmark
    from app.models.user import User
    from app.controllers.auth_provider import AuthProviderController
    from app.controllers.bookmark import BookmarkController
    from app.controllers.user import UserController
    Base.metadata.create_all(bind=engine)
