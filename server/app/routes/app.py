from flask import Blueprint, jsonify, request
import requests

app_bp = Blueprint( 'app',__name__ )

'''The full Api is api/app/home'''
@app_bp.route('/home')
def get_all_plants():
    try:
        res = requests.get('https://trefle.io/api/v1/plants?token=NS_J5cVATrg8kGNmRqv3fYyenLln4DFdXAKFa2T0kYU&page=1')
        data = res.json()
        return jsonify({'message':'sucessfully fetched from the api', 'data':data})
    except Exception as e :
        return jsonify({'message':'unsucessfull attempt at fetching!', 'error':str(e)})

