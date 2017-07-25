import json, httplib2, os
from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import create_access_token
from app.controllers.auth_provider import AuthProviderController
from app.controllers.user import UserController

authentication_api = Blueprint('authentication', __name__)


@authentication_api.route('/facebook-login', methods=['POST'])
def facebook_login():
    """ facebook-login """

    # token recieved from react
    client_access_token = request.data

    # app config
    fb_id = os.environ['FACEBOOK_ID']
    fb_secret = os.environ['FACEBOOK_SECRET']

    # build url for longterm access token
    auth_url = 'https://graph.facebook.com/oauth/access_token'
    auth_url = '%s?grant_type=fb_exchange_token' % auth_url
    auth_url = '%s&client_id=%s' % (auth_url, fb_id)
    auth_url = '%s&client_secret=%s' % (auth_url, fb_secret)
    url = '%s&fb_exchange_token=%s' % (auth_url, client_access_token)

    # get new token from request
    h = httplib2.Http()
    result = h.request(url, 'GET')[1]
    token = json.loads(result)
    client_access_token = token['access_token']

    # use token to get user details
    base_url = 'https://graph.facebook.com/v2.8/me'
    fields = 'fields=id,email,first_name,last_name'
    url = '{base_url}?access_token={token}&{fields}'.format(
        base_url=base_url,
        token=client_access_token,
        fields=fields)

    req = httplib2.Http()
    result = req.request(url, 'GET')[1]
    user_details = json.loads(result)
    fb_email = user_details['email']
    fb_first_name = user_details['first_name']
    fb_last_name = user_details['last_name']
    fb_id = user_details['id']

    # get users avatar
    url = '{base_url}/picture?access_token={token}&{redirect}&{size}'.format(
        base_url=base_url,
        token=client_access_token,
        redirect='redirect=0',
        size='height=200&width=200')

    req = httplib2.Http()
    result = req.request(url, 'GET')[1]
    image = json.loads(result)
    fb_avatar = image['data']['url']

    if AuthProviderController.exists('facebook', user_details['id']):
        print 'auth provider exists'
        user_id = AuthProviderController.exists('facebook', user_details['id'])
        user = UserController.one(user_id)
    else:
        print 'auth provider doesnt exists'
        user = UserController.create(
            fb_first_name,
            fb_last_name,
            fb_email,
            fb_avatar)

        print 'user create %s' % user.user_id

        AuthProviderController.create(
            'facebook',
            user_details['id'],
            user.user_id)

    ret = {'access_token': create_access_token(identity=user.serialize())}
    return jsonify(ret), 200
