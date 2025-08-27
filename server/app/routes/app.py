from flask import Blueprint, jsonify, request

app_bp = Blueprint(__name__, 'app')

'''The full Api is api/app/home'''
@app_bp.route('/home')
def home():
    return jsonify({'message':'hello usr this is home'})