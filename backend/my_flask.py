from flask import Flask, jsonify
from api import API as api
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/tradingPairs")
def tradingPairs():
    return api.getAllTradingPairs()

@app.route("/candles/<id>/<granularity>")
def candles(id, granularity):
    return api.getCandle(id, granularity)


if __name__ == "__main__":
    app.run(debug=True)