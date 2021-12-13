import json
from typing import Dict
from flask import Flask, render_template, request, abort
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy
from flask_admin.contrib.sqla import ModelView
from flask_login import LoginManager, current_user, login_user, UserMixin, login_required


app = Flask(__name__)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
app.secret_key = 'my Pa$$word!!!'


app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"

admin = Admin(app, name='microblog', template_mode='bootstrap3')


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String, unique=False, nullable = False)
    password = db.Column(db.String, unique=False, nullable=False)
    favs = db.relationship('Favorites', backref = 'User')
    is_active = True

    def check_password(self, inputPassword):
        return inputPassword == self.password


class Favorites(db.Model):
    id = db.Column(db.Integer, nullable = False, primary_key = True)
    restaurant = db.Column(db.String, unique = False, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)



admin.add_view(ModelView(User, db.session))
admin.add_view(ModelView(Favorites, db.session))

db.create_all()
db.session.commit()

# u = User(username = "king", password = "123", name = "Sab")
# db.session.add(u)
# db.session.commit()
# u = User.query.filter_by(username = "king").first()
# f = Favorites(restaurant = "Atwater Sushi", user_id = u.id)
# db.session.add(f)
# db.session.commit()

@login_manager.user_loader
def load_user(user_id):
    try:
        u = User.query.get(user_id)
        return u
    except:
        return None

@app.route("/", methods=["GET"])
def landingPage():
    if(current_user.is_authenticated):
        return render_template("buttonPage.html")
    else:
        return render_template("Login.html")

@app.route("/login", methods=["POST"])
def returningUser():
    user = User.query.filter_by(username=request.json['username']).first()
    if user is not None and user.check_password(request.json['password']):
        login_user(user)
        print("LOGGED IN USER WITH ID: " + str(user.id))
        return render_template("buttonPage.html")

    else:
        return dict(msg = "FAILED")

@app.route("/createuser", methods=["POST"])
def creatingUser():
    user = User.query.filter_by(username=request.json['username']).first()
    if user is None:
        u = User(username=request.json["username"], name = request.json["name"], password = request.json["password"])
        db.session.add(u)
        db.session.commit()
        return render_template("buttonPage.html")
    else:
        abort(500)

@app.route("/pressbutton", methods = ["GET"])
@login_required
def loadDashboard():
    return render_template("buttonPage.html")


@app.route("/addFav", methods = ["POST"])
@login_required
def addFav():
    f = Favorites(restaurant = request.json["restaurant"], user_id = current_user.id)
    db.session.add(f)
    db.session.commit()
    return json.dumps("{message: 'success'}")

app.run()