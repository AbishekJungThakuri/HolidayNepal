from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from recommand import give_plan
import pandas as pd

app = Flask(__name__)
CORS(app, supports_credentials=True)
# Read data
city_df = pd.read_excel("data/data.xlsx", sheet_name="City")
place_df = pd.read_excel("data/data.xlsx", sheet_name="Place")
activities_df = pd.read_excel("data/data.xlsx", sheet_name="Activities")
event_df = pd.read_excel("data/data.xlsx", sheet_name="Events")
accommodation_df = pd.read_excel("data/data.xlsx", sheet_name="Accommodation")

@app.route("/")
def hello_world():
    return "<h1>Server started successfully</h1>"

@app.route("/data/cities", methods=["GET"])
def get_all_cities():
    return jsonify(city_df.to_dict(orient='records'))

@app.route("/data/activities", methods=["GET"])
def get_all_activities():
    return jsonify(activities_df.to_dict(orient='records'))

@app.route("/data/events", methods=["GET"])
def get_all_events():
    return jsonify(event_df.to_dict(orient='records'))
    
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
    return jsonify(place_df[1:].to_dict(orient='records'))

@app.route("/data/accommodations", methods=["GET"])
def get_all_accommodation():
    return jsonify(accommodation_df.to_dict(orient='records'))
    


if __name__ == "main":
    app.run(debug=True)