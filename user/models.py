from flask import Flask, jsonify, request
#from passlib.hash import pbkdf2_sha256
from werkzeug.security import generate_password_hash, check_password_hash
from app import *

class User:

  def create_user(self):
    print(request.form)
    
    # Create the user object
    user = {
      "username": request.form.get('username'),
      "password": request.form.get('password')
    }

    # Encrypt  the password
    user['password'] = generate_password_hash(user['password'])


    mongo.db.users.insert_one(user)

    return jsonify(user)