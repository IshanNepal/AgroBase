from flask import Blueprint, jsonify, request, make_response
from ..model import User
import jwt, datetime
from ..extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
             
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    username = data.get("username", "")

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    user = User(email=email, password=hashed_pw,  uname=username)
    db.session.add(user)
    db.session.commit()
    login_user(user)

    # Optional: if you want to return JSON with token
    from flask_jwt_extended import create_access_token
    token = create_access_token(identity=user.id)

    return jsonify({
        "token": token,
        "user": {"id": user.id, "email": user.email, "username": user.username},
        "redirect": "/app/dashboard"  # frontend can read this and navigate
    })

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401
    login_user(user)
    token = create_access_token(identity=user.id)
    return jsonify({"token": token, "user": {"id": user.id, "email": user.email, "username": user.username}})

@auth_bp.route("/logout")
@login_required
def logout():
    logout_user()
    return jsonify({"msg": "Logged out successfully"})