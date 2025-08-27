from flask import Flask
from .extensions import init_extensions

'''Defining Create_app'''
def create_app():
    app = Flask(__name__)

    '''Initializing Extentions'''
    init_extensions(app)

    '''Registering Blueprint'''
    from app.routes.app import app_bp
    app.register_blueprint(app_bp, url_prefix='/api/app')
    return app
    