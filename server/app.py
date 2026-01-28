from flask import Flask, request, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, User, UserRole, Delivery

app = Flask(__name__)


DATABASE_URL = "sqlite:///sendit.db"  
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine)


Base.metadata.create_all(engine)


@app.route("/")
def home():
    return {"message": "SendIT Backend is running"}


@app.route("/users", methods=["POST"])
def create_user():
    session = SessionLocal()
    data = request.json

    user = User(
        name=data["name"],
        email=data["email"],
        phone_number=data.get("phone_number"),
        password=data["password"],
        role_id=data["role_id"]
    )

    session.add(user)
    session.commit()
    session.close()

    return jsonify({"message": "User created"}), 201


@app.route("/deliveries", methods=["POST"])
def create_delivery():
    session = SessionLocal()
    data = request.json

    delivery = Delivery(
        user_id=data["user_id"],
        pickup_location=data["pickup_location"],
        drop_off_location=data["drop_off_location"],
        distance=data.get("distance"),
        weight=data.get("weight"),
        size=data.get("size"),
    )

    session.add(delivery)
    session.commit()
    session.close()

    return jsonify({"message": "Delivery created"}), 201


if __name__ == "__main__":
    app.run(debug=True)
