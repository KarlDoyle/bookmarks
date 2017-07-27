import requests
from flask import Blueprint, request, jsonify
# https://github.com/vimalloc/flask-jwt-extended
from flask_jwt_extended import jwt_required, get_jwt_identity
# https://www.crummy.com/software/BeautifulSoup/bs4/doc/
from bs4 import BeautifulSoup

from app.controllers.bookmark import BookmarkController


bookmark_api = Blueprint('bookmark', __name__)


@bookmark_api.route('/bookmarks', methods=['GET', 'POST'])
@jwt_required
def bookmarks():
    """ Bookmarks """
    if request.method == 'POST':
        # return 'Create new bookmark'
        url = request.data
        current_user = get_jwt_identity()
        user_id = current_user['id']

        document = requests.get(url, verify=True)
        soup = BeautifulSoup(document.text, 'html.parser')
        title = soup.title.string

        # First get the meta description tag
        query_1 = soup.find('meta', attrs={'name': 'og:description'})
        query_2 = soup.find('meta', attrs={'property': 'description'})
        query_3 = soup.find('meta', attrs={'name': 'description'})
        description = query_1 or query_2 or query_3

        # Verify is content has description
        if description:
            desc = description.get('content')
        else:
            desc = None

        bookmark = BookmarkController.create(url, title, desc, user_id)
        return jsonify(bookmark.serialize()), 200

    if request.method == 'GET':
        # return 'Get list of users bookmarks'
        current_user = get_jwt_identity()
        user_id = current_user['id']
        bookmarks = BookmarkController.all(user_id)

        if not bookmarks:
            return jsonify([]), 200
        else:
            return jsonify([i.serialize() for i in bookmarks]), 200


@bookmark_api.route('/bookmarks/<bookmark_id>', methods=['DELETE', 'PUT'])
@jwt_required
def bookmarks_delete(bookmark_id):
    """ Bookmarks """
    if request.method == 'DELETE':
        # return 'Create new bookmark'
        current_user = get_jwt_identity()
        user_id = current_user['id']
        BookmarkController.delete(bookmark_id, user_id)
        return bookmark_id

    if request.method == 'PUT':
        # save type is either archived or favourited
        save_type = request.data
        current_user = get_jwt_identity()
        user_id = current_user['id']
        bookmark = BookmarkController.update(bookmark_id, user_id, save_type)
        return jsonify(bookmark.serialize()), 200
