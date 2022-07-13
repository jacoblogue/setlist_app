import os
from . import create_app
from . import db
from .models import Song
from flask import abort, jsonify, request

app = create_app(os.getenv('FLASK_CONFIG') or 'default')


@app.route('/songs', methods=['GET'])
def get_songs():
    songs = Song.query.all()
    return jsonify([song.to_json() for song in songs])


@app.route('/song/<int:id>', methods=['GET'])  # get song by id
def show_song(id):
    song = Song.query.get(id)
    if song is None:
        abort(404)
    return jsonify(song.to_json())


@app.route('/song/<int:id>', methods=['DELETE'])  # delete song by id
def delete_song(id):
    song = Song.query.get(id)
    if song is None:
        abort(404)
    db.session.delete(song)
    db.session.commit()
    return jsonify({'result': True})


@app.route('/song', methods=['POST'])  # create song
def create_song():
    if not request.json:
        abort(400)
    song = Song(artist=request.json['artist'],
                title=request.json['title'],
                length=request.json['length']
                )
    db.session.add(song)
    db.session.commit()
    return jsonify(song.to_json()), 201


@app.route('/song/<int:id>', methods=['PUT'])  # update song by id
def update_song(id):
    if not request.json:
        abort(400)
    song = Song.query.get(id)
    if song is None:
        abort(404)
    song.title = request.json.get('title', song.title)
    song.artist = request.json.get('artist', song.artist)
    song.length = request.json.get('length', song.length)
    db.session.commit()
    return jsonify(song.to_json())
