from flask import Flask, request, jsonify, make_response
import sys
sys.path.append('./KGQA')
from KGQA import main

app = Flask(__name__)


#Members API Route
@app.route("/api_call", methods=["POST"])
def api_call():
    user_query = request.get_json()
    resp = {"sentences": str(main(["Chatbot query", user_query]))}
    return resp
    

if __name__ == "__main__":
    app.run(debug=True)
