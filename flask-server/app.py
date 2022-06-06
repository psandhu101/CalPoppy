from flask import Flask, request
import sys
sys.path.append('./KGQA')
from KGQA import main

app = Flask(__name__)

#Members API Route
@app.route("/members")
def members():
    return {"members":["Member1", "Member2"]}

@app.route("/api_call", methods=["GET"])
def api_call():
    user_query = request.get_json()
    #print("In API CALL: ", user_query)
    resp = {"sentences":[str(main.main(["Chatbot query", user_query]))]}
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp
    

if __name__ == "__main__":
    app.run(debug=True)