from flask import Flask, request
import sys
sys.path.append('./KGQA')
from KGQA import statement_intake

app = Flask(__name__)

@app.route("/api/get_ai_response", methods=["POST"])
def get_ai_response():
    user_query = request.get_json()
    #print("In API CALL: ", user_query)
    resp = {"sentences":[str(statement_intake.main(["Chatbot query", user_query]))]}
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp
    

if __name__ == "__main__":
    app.run(debug=True)