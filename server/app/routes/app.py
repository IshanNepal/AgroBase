from flask import Blueprint, jsonify, request
import requests

app_bp = Blueprint( 'app',__name__ )

'''The full Api is api/app/home'''
@app_bp.route('/home')
def get_all_plants():
    try:
        res = requests.get('https://trefle.io/api/v1/plants?token=NS_J5cVATrg8kGNmRqv3fYyenLln4DFdXAKFa2T0kYU&page=1')
        data = res.json()
        info = data['data']
        return jsonify({'message':'sucessfully fetched from the api', 'info':info})
    except Exception as e :
        return jsonify({'message':'unsucessfull attempt at fetching!', 'error':str(e)})

@app_bp.route('/get_plant/<int:id>')
def get_plant_with_id(id):
    try:
        res = requests.get(f'https://trefle.io/api/v1/plants/{id}?token=NS_J5cVATrg8kGNmRqv3fYyenLln4DFdXAKFa2T0kYU')
        data = res.json()
        info = data['data']
        return jsonify({'message':'sucessfully fetched from the api', 'info':info})
    except Exception as e :
        return jsonify({'message':'unsucessfull attempt at fetching!', 'error':str(e)})

