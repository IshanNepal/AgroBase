from flask import Blueprint, jsonify, request, current_app
import requests


app_bp = Blueprint('app', __name__)
@app_bp.route('/home')
def get_all_plants():
    try:
        res = requests.get(
            'https://trefle.io/api/v1/plants?token=NS_J5cVATrg8kGNmRqv3fYyenLln4DFdXAKFa2T0kYU&page=1')
        res.raise_for_status()
        info = res.json().get('data', [])
        return jsonify({'message': 'Successfully fetched from the API', 'info': info})
    except Exception as e:
        return jsonify({'message': 'Unsuccessful attempt at fetching!', 'error': str(e)}), 500
@app_bp.route('/get_plant/<int:id>')
def get_plant_with_id(id):
    try:
        res = requests.get(
            f'https://trefle.io/api/v1/plants/{id}?token=NS_J5cVATrg8kGNmRqv3fYyenLln4DFdXAKFa2T0kYU'
        )
        res.raise_for_status()

        info = res.json().get('data', {})
        return jsonify({'message': 'Successfully fetched from the API', 'info': info})
    except Exception as e:
        return jsonify({'message': 'Unsuccessful attempt at fetching!', 'error': str(e)}), 500


@app_bp.route('/ai_info', methods=['POST'])

def get_ai_help():

    try:
        data = request.json
        plant = data.get('plant_info', '')

        if not plant:
            return jsonify({"error": "No plant info provided"}), 400

        response = requests.post(
            url="https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": "Bearer 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",
                "HTTP-Referer": "http://localhost:5173/",
                "X-Title": "AgroBase",},
            json={"model": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
                "messages": [
                    {
                        "role": "user",
                        "content": f"Provide uses and a detailed brief regarding discovery and other helpful points for the plant: {plant}. Make sure to include everything a farmer can use!"
                    }
                ]
            }
        )
        

        return jsonify({'message': 'success', 'data': response.json()}), 200

    except Exception as e:
        return jsonify({'message': 'Unsuccessful attempt at fetching!', 'error': str(e)}), 500
