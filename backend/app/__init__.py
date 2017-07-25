# All imported from __init__.py
from flask import Flask, request
from flask_jwt_extended import JWTManager

from database import init_db


def create_app():
    """ initialise application """
    application = Flask(__name__)
    jwt = JWTManager(application)

    # Cross origin requests
    @application.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        if request.method == 'OPTIONS':
            methods = 'DELETE, GET, POST, PUT'
            response.headers['Access-Control-Allow-Methods'] = methods
            headers = request.headers.get('Access-Control-Request-Headers')
            if headers:
                response.headers['Access-Control-Allow-Headers'] = headers
        return response

    # import config files
    application.config.from_object('app.config')

    init_db()

    from app.api.user import authentication_api
    from app.api.bookmark import bookmark_api

    application.register_blueprint(bookmark_api)
    application.register_blueprint(authentication_api)

    return application
