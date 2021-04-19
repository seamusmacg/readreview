from flask import Flask, jsonify, request
#from passlib.hash import pbkdf2_sha256
from werkzeug.security import generate_password_hash, check_password_hash
from app import *

class User:

  def create_user(self):
    print(request.form)
    
    # Create the user object
    user = {
      "username": request.form.get('username').lower(),
      "password": request.form.get('password')
    }

    # Encrypt  the password
    user['password'] = generate_password_hash(user['password'])

    # Check if user exists
    existing_user = mongo.db.users.find_one({"username": user['username'].lower()})
    if existing_user:
      return jsonify({ "error": "Username already exists"}), 400

    # Insert new user to DB
    new_user = mongo.db.users.insert_one(user)
    if new_user:
      return jsonify(user), 200


    # Add new user to 'session' cookie
    session["user"] = user['username'].lower()
    flash("Registration successful!")

    return jsonify({"error": "Signup failed"}), 400