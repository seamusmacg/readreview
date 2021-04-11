import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env

# Create instance of Flask class 
app = Flask(__name__)

# Configure MongoDB and Secret Key
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY") 

mongo = PyMongo(app)


# Decorator and function for Home page
@app.route("/")
def get_home():
  return render_template("index.html")


# Decorator and function for Catalogue page
@app.route("/catalogue")
def get_catalogue():
  books = mongo.db.books.find()
  return render_template("catalogue.html", books=books)


if __name__ == "__main__":
  app.run(host=os.environ.get("IP"),
          port=int(os.environ.get("PORT")),
          debug=True)


