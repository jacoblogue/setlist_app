from app import db
from app.routes import app
from app.models import Song


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Song': Song}

# if __name__ == '__main__':
#     app.run(debug=True)
