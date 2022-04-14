from flask import Flask, request
import sys
sys.path.append('./KGQA')
from KGQA import statement_intake

app = Flask(__name__)

#Members API Route
@app.route("/members")
def members():
    return {"members":["Member1", "Member2"]}

@app.route("/api_call", methods=["POST"])
def api_call():
    user_query = request.get_json()
    #print("In API CALL: ", user_query)
    return {"sentences":[str(statement_intake.main(["Chatbot query", user_query]))]}
    

if __name__ == "__main__":
    app.run(debug=True)