from . import db


class Song(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key=True)
    artist = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    length = db.Column(db.Integer, nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'artist': self.artist,
            'title': self.title,
            'length': self.length
        }
