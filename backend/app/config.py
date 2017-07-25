
import os
# from flask import request
# PORT = 9000
# HOST = '0.0.0.0'
# DATABASE_URI = 'sqlite:///app/development.db'
DATABASE_URI = 'postgresql:///vagrant'
SECRET_KEY = os.environ.get('SECRET_KEY')
FACEBOOK_SECRET = os.environ.get('FACEBOOK_SECRET')
FACEBOOK_ID = os.environ.get('FACEBOOK_ID')