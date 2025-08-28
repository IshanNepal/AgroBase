from .extensions import db
from .extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uname = db.Column(db.String, nullable=False, unique=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password  = db.Column(db.String(60), nullable=False)

