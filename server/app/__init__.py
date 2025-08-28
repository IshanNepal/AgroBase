from flask import Flask
from .extensions import init_extensions

'''Defining Create_app'''
def create_app():
    app = Flask(__name__)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///agriculture.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
    app.config['SECRET_KEY'] = 'YOUR_SECRET_KEY'

    '''Initializing Extentions'''
    init_extensions(app)

    '''Registering Blueprint'''
    from app.routes.app import app_bp
    app.register_blueprint(app_bp, url_prefix='/api/app')
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    return app
    