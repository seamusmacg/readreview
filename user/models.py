from flask import Flask
from flask import jsonify

class User:

  def register(self):
    
    user = {
      "_id": "",
      "name": "",
      "password": ""
    }

    return jsonify(user), 200