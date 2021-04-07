from flask import Flask
import os
if os.path.exists("env.py"):
  import env

# Create instance of Flask class 
app = Flask(__name__)


# Decorator telling Flask which URL to trigger
@app.route("/")
def test():
  return "Application is up and running! Testing Git!"


if __name__ == "__main__":
  app.run(host=os.environ.get("IP"),
          port=int(os.environ.get("PORT")),
          debug=True)


