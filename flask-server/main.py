from flask import Flask, request, jsonify, make_response
import sys
sys.path.append('./KGQA')
from KGQA import main

app = Flask(__name__)


#Members API Route
@app.route("/api_call", methods=["POST"])
def api_call():
    user_query = request.get_json()
    print("In API CALL: ", user_query)
    #resp = make_response(jsonify({"sentences": str(statement_intake.main(["Chatbot query", user_query]))}), 400)
    #resp.headers["Access-Control-Allow-Origin"] = "*"
    #resp = {"sentences": "ok, right spot"}
    resp = {"sentences": str(main.main(user_query))}
    #test = str(statement_intake.main(["Chatbot query", user_query]))
    #print("Test API Result:", test)
    return resp
    

if __name__ == "__main__":
    app.run(debug=True)