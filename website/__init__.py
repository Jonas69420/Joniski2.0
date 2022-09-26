import os
from replit import db
from flask import Flask,  render_template

def create_app():
    app = Flask(__name__)
    app.config[
        "SECRET_KEY"
    ] = "dada"

    @app.route("/")
    def main():
        db["clicks"] = db["clicks"] + 1
        return render_template("main.html", clicks=db["clicks"]);

    @app.route("/downloads")
    def downloads():
        return render_template("downloads.html");

    @app.route("/stuff")
    def stuff():
        return render_template("stuff.html");

    return app