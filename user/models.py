from flask import Flask, jsonify, request, redirect, session
from werkzeug.security import generate_password_hash, check_password_hash
from app import *
import datetime


# User Class
class User:
  
  # Start Session
  def start_session(self, user):
    del user['password']
    session['logged_in'] = True
    session['user'] = user
    return jsonify(user), 200
  
  
  # Create User
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
      return jsonify({ "error": "Username already exists, try another!"}), 400


    # Insert new user to DB
    new_user = mongo.db.users.insert_one(user)
    if new_user:
      return self.start_session(user)


    return jsonify({"error": "Register failed"}), 400


  # User Logout
  def logout(self):
      session.clear()
      return redirect('/')
  
  
  # User Login
  def login(self):
    
    
    # Check if existing user
    existing_user = mongo.db.users.find_one({
      "username": request.form.get('username').lower()
      })
    
    
    # Check login credentials
    if existing_user and check_password_hash(existing_user['password'], request.form.get('password')):
      return self.start_session(existing_user)
    
    
    return jsonify({"error": "Incorrect login details" }), 401


# Review Class  
class Review:
  
  
  # Add Review
  def add_review(self):
    
    
    # Create review object
    review = {
      "review": request.form.get("review"),
      "username": session['user']["username"],
      "title": request.form.get("title"),
      "date": datetime.datetime.utcnow(),
      "edited": datetime.datetime.utcnow()
    }
    
    
    # Check if user has already submitted review
    already_submitted = mongo.db.reviews.find_one({"title": review['title'], "username": review['username']})
    if already_submitted:
      return json.dumps({'error': "Sorry, user has already submitted a review for this book"}), 400, {'ContentType':'application/json'} 
    
    
    # Check if book is in the db
    existing_title = mongo.db.books.find_one({"title": review['title']})
    
    
    # Add upvotes/downvotes
    if existing_title:
      checked = request.form.get("group1")
      if checked == "thumb-up":
        upvote = mongo.db.books.find_one_and_update(
        {"_id": ObjectId(request.form.get("book-id"))}, 
        {"$inc": 
          { "upvotes": 1}
        }
        )
      elif checked ==  "thumb-down":
        downvote = mongo.db.books.find_one_and_update(
            {"_id": ObjectId(request.form.get("book-id"))}, 
            {"$inc": 
              { "downvotes": 1}
            }
            )
    
    
    # Insert new review    
    new_review = mongo.db.reviews.insert_one(review)
    if new_review:
      return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
    else:
      return jsonify({"error": "Sorry, book title does not exist"}), 400
    
    
  def delete_review(self):
   
   
    # Create review object 
    review = {
      "_id": request.form.get("id")
    }
    
    # Delete review
    delete_review = mongo.db.reviews.remove({"_id": ObjectId(review['_id'])})
    
    
    if delete_review:
      return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
    else:
      return json.dumps({'error': "Sorry, that review doesn't exist"}), 400, {'ContentType':'application/json'}
    
  
  # Edit review  
  def edit_review(self):
      
 
      # Edit existing review
      edit_review = mongo.db.reviews.find_one_and_update(
        {"_id": ObjectId(request.form.get("id-edit"))}, 
        {"$set": 
          { "review": request.form.get("review-edit"),
           "edited": datetime.datetime.utcnow()}  
        },upsert=True
        )
      
      
      if edit_review: 
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
      else:
        return json.dumps({'error': "Sorry can't edit review"}), 400, {'ContentType':'application/json'}
      

# Book Class                        
class Book:
  
  def submit_book(self):
    
    
    # Create book object
    book = {
      "title": request.form.get("title"),
      "username": session['user']["username"],
      "author": request.form.get("author"),
      "genre": request.form.get("genre"),
      "pages": request.form.get("pages"),
      "year": request.form.get("year"),
      "image_url": request.form.get("cover"),
      "summary": request.form.get("summary"),
      "upvotes": 0,
      "downvotes": 0
    }
    
    
    # Check if book already exists
    existing_title = mongo.db.books.find_one({"title": book['title']})
    
    
    if existing_title:
      return json.dumps({'error': "Sorry book already exists"}), 400, {'ContentType':'application/json'} 
    else:
      
      # Insert book to db       
      new_book = mongo.db.books.insert_one(book)
      
      return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
    
  
  # Delete book
  def delete_book(self):
    
    
    # Create book object
    book = {
      "_id": request.form.get("id")
    }
    
    
    # Delete book from db
    delete_book = mongo.db.books.remove({"_id": ObjectId(book['_id'])})
     
    if delete_book:
      return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
    else:
      return json.dumps({'error': "Sorry, book cannot be deleted"}), 400, {'ContentType':'application/json'}
      
      