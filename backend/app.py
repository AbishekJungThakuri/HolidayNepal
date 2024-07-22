from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User

from recommand import give_plan

app = Flask(__name__)

# Login
app.config['SECRET_KEY'] = "Sudarshan"
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///flaskdb.db"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True


bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()



@app.route("/")
def hello_world():
    return "<p>Hello, World! hehehe</p>"

@app.route("/signup", methods=["POST"])
def signup():
    
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password = hashed_password)

    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify(
        {
            "id": new_user.id,
            "email": new_user.email
        }
    )

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "User doesn't exists"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Wrong password"}), 401

    session["user_id"] = user.id

    return jsonify(
        {
            "id": user.id,
            "email": user.email
        }
    )

# Data
import pandas as pd

# Read data
city_df = pd.read_excel("data/data.xlsx", sheet_name="City")
place_df = pd.read_excel("data/data.xlsx", sheet_name="Place")
accommodation_df = pd.read_excel("data/data.xlsx", sheet_name="Accommodation")



@app.route("/data/cities", methods=["GET"])
def get_all_cities():
    return jsonify(city_df.to_dict(orient='records'))
    
@app.route("/data/places", methods=["GET"])
def get_all_places():
    # Define the new range
    rating_min = 3.5
    rating_max = 4.9

    # Get the original min and max
    original_min = place_df['rating'].min()
    original_max = place_df['rating'].max()

    # Apply min-max normalization and round to one decimal place
    place_df['rating'] = (((place_df['rating'] - original_min) / (original_max - original_min)) * (rating_max - rating_min) + rating_min).round(1)
    return jsonify(place_df.to_dict(orient='records'))

@app.route("/data/accommodations", methods=["GET"])
def get_all_accommodation():
    return jsonify(accommodation_df.to_dict(orient='records'))
    


if __name__ == "main":
    app.run(debug=True)