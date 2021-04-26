import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, jsonify)
from flask_pymongo import PyMongo
from functools import wraps
from bson.objectid import ObjectId
from bson.json_util import ObjectId
import json
if os.path.exists("env.py"):
    import env
from user.models import *

# JSON Encoder - class taken from http://5.9.10.113/65535560/typeerror-object-of-type-objectid-is-not-json-serializable
class MyEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)

# Create instance of Flask class 
app = Flask(__name__)
app.json_encoder = MyEncoder

# Configure MongoDB and Secret Key
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY") 

mongo = PyMongo(app)

# Decorators
def login_required(f):
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/')
  return wrap

# Routes
@app.route("/")
def get_home():
  return render_template("index.html")

@app.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == "POST":
    user = User()
    return user.create_user()
  return render_template("register.html")

@app.route('/login/', methods=['GET', 'POST'])
def login():
  if request.method == "POST":
    user = User()
    return user.login()
  return render_template("login.html")

@app.route('/logout/')
def logout():
  user = User()
  return user.logout()


@app.route('/profile/')
@login_required
def get_profile():
  return render_template("profile.html")


@app.route("/catalogue", methods=['GET', 'POST'])
def get_catalogue():
  books = mongo.db.books.find()
  reviews = mongo.db.reviews.find()
  return render_template("catalogue.html", books=books, reviews=reviews)



if __name__ == "__main__":
  app.run(host=os.environ.get("IP"),
          port=int(os.environ.get("PORT")),
          debug=True)


