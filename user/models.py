from flask import Flask, jsonify, request, redirect, session
#from passlib.hash import pbkdf2_sha256
from werkzeug.security import generate_password_hash, check_password_hash
from app import *

class User:

  def start_session(self, user):
    del user['password']
    session['logged_in'] = True
    session['user'] = user
    return jsonify(user), 200

  def create_user(self):
    print(request.form)
    
    # Create the user object
    user = {
      "username": request.form.get('username').lower(),
      "password": request.form.get('password')
    }

    # Encrypt  the password
    user['password'] = generate_password_hash(user['password'])

    # Check if fields are blank
    # if not request.form.get('username') or not request.form.get('password'):
    #   return jsonify({ "error": "Fields cannot left blank"}), 400

    # Check if user exists
    existing_user = mongo.db.users.find_one({"username": user['username'].lower()})
    if existing_user:
      return jsonify({ "error": "Username already exists, try another!"}), 400

    # Check username length 
    # if len(request.form.get('username')) < 4:
    #   return jsonify({ "error": "Enter username at least 4 characters long"}), 400

    # Check password length 
    # if len(request.form.get('password')) < 8:
    #   return jsonify({ "error": "Enter password at least 8 characters long"}), 400


    # Insert new user to DB
    new_user = mongo.db.users.insert_one(user)
    if new_user:
      return self.start_session(user)


    # Add new user to 'session' cookie
    # session["user"] = user['username'].lower()
    # flash("Registration successful!")

    return jsonify({"error": "Register failed"}), 400

  def logout(self):
      session.clear()
      return redirect('/')
    
  def login(self):
    
    existing_user = mongo.db.users.find_one({
      "username": request.form.get('username').lower()
      })
    
    if existing_user and check_password_hash(existing_user['password'], request.form.get('password')):
      return self.start_session(existing_user)
    
    return jsonify({"error": "Incorrect login details" }), 401