from flask import Flask
from flask_cors import CORS
from routes import api_routes

app = Flask(__name__)
CORS(app)

# Enable CORS for a specific route
CORS(app, resources={r"/api/predict": {"origins": "*"}})

# Enable CORS for all routes, allowing any origin
CORS(app, resources={r"/*": {"origins": "*"}})

# Register API routes
app.register_blueprint(api_routes)

if __name__ == "__main__":
    print("connected..")
    app.run(debug=True)

