from flask import Flask, jsonify
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

CSV_FILE = "product.csv"

# Function to read CSV and convert to JSON
def read_products():
    products = []
    if not os.path.exists(CSV_FILE):
        return {"error": "CSV file not found!"}

    with open(CSV_FILE, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            products.append({
                "id": int(row["id"]),
                "name": row["name"],
                "price": float(row["price"]),
                "qty": int(row["qty"]),
                "image": row.get("image", "https://via.placeholder.com/150")  # Default placeholder image
            })
    return products

@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(read_products())

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=7000)  # LISTEN ON ALL IPS

