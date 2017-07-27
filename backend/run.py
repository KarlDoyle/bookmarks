"""Webserver for starting backend application"""
import os

from app import create_app

def application(environ, start_response):
    os.environ['SECRET_KEY'] = environ['SECRET_KEY']
    os.environ['FACEBOOK_SECRET'] = environ['FACEBOOK_SECRET']
    os.environ['FACEBOOK_ID'] = environ['FACEBOOK_ID']

    _application = create_app()
    _application.secret_key = os.environ['SECRET_KEY']

    return _application(environ, start_response)

if __name__ == '__main__':
    _application.run(debug=True)