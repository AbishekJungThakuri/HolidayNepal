from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid())
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    fav_places = db.Column(db.String(1000), nullable=True)
    fav_cities = db.Column(db.String(1000), nullable=True)
    fav_activities = db.Column(db.String(1000), nullable=True)
    fav_festivals = db.Column(db.String(1000), nullable=True)
    selected_plan = db.Column(db.String(1000), nullable=True)
