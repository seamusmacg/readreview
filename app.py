from website import create_app
import os
if os.path.exists("env.py"):
  import env

app = create_app()

@app.route("/")
def test():
  return "Application is up and running!"


if __name__ == "__main__":
  app.run(host=os.environ.get("IP"),
          port=int(os.environ.get("PORT")),
          debug=True)


