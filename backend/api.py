import requests
from collections import defaultdict
import json, hmac, hashlib, time, requests
from requests.auth import AuthBase

# Before implementation, set environmental variables with the names API_KEY and API_SECRET
API_KEY = '01f1b83c19f7c29463da79a137e38f1d'
API_SECRET = b'LPvA+3buf65E0eDgBe6cFCuSNXp5uv/jn/9d8gTLXgJIEkpBhI5ZBhcYFe1VmjyxR2+SBUHDJXPQId2oBuaAsA=='

# Create custom authentication for Coinbase API
class CoinbaseWalletAuth(AuthBase):
    def __init__(self, api_key, secret_key):
        self.api_key = api_key
        self.secret_key = secret_key

    def __call__(self, request):
        timestamp = str(int(time.time()))
        message = timestamp + request.method + request.path_url + (request.body or b'').decode()
        signature = hmac.new(self.secret_key, message.encode(), hashlib.sha256).hexdigest()

        request.headers.update({
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': self.api_key,
        })
        return request

api_url = 'https://api.coinbase.com/v2/'
auth = CoinbaseWalletAuth(API_KEY, API_SECRET)

# Get current user
r = requests.get(api_url + 'user', auth=auth)
print(r.json())
# {u'data': {u'username': None, u'resource': u'user', u'name': u'User'...

class API: 
    def getAllTradingPairs():
        url = 'https://api.pro.coinbase.com/products'
        response = requests.get(url).json()
        # res = defaultdict()
        res = []
        # Store products as (id, display name) in list
        for i in range(len(response)):
            res.append((response[i]['id'], response[i]['display_name']))
        
        # Sort by display name
        return sorted(res, key=lambda x:x[1])

    def getCandle(id, granularity=60):
        url = 'https://api.pro.coinbase.com/products/' + id + '/candles' + '?granularity=' + granularity
        response = requests.get(url).json()
        return response
