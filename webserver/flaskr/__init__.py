import os
import json
from flask import Flask, redirect, url_for, request

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route('/login',methods = ['POST', 'GET'])
    def login():
        if request.method == 'POST':
            print(request.get_json())
            for a in request.get_json().values():
                print(a)
            return "Top"
        
        else:
            return "Nu prea e top"

    from . import db
    db.init_app(app)

    return app


if __name__=="__main__":
    conf = {
        "host":"0.0.0.0",
        "port":4995,
    }
    a = create_app(test_config=conf)
    a.run()