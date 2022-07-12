import os
from . import create_app
from .models import Song
from flask import abort, jsonify

app = create_app(os.getenv('FLASK_CONFIG') or 'default')


@app.route('/song/list', methods=['GET'])
def get_songs():
    songs = Song.query.all()
    return jsonify([song.to_json() for song in songs])


@app.route('/song/<int:id>', methods=['GET'])  # get song by id
def show_song(id):
    song = Song.query.get(id)
    if song is None:
        abort(404)
    return jsonify(song.to_json())
