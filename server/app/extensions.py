from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

'''Creating Instances'''
db = SQLAlchemy()
cors = CORS()

def init_extensions(app):
    db.init_app(app)
    cors.init_app(app)
