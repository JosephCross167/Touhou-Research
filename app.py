from flask import Flask
import config
from exts import db
from models import User
from blueprints.author import bp as au_bp
from blueprints.qa import bp as qa_bp
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(config)

db.init_app(app)

migrate = Migrate(app, db)
app.register_blueprint(au_bp)
app.register_blueprint(qa_bp)
@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
