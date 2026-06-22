from flask import Flask, render_template
from app.database import engine, Base
from flask_restx import Api
from flask_cors import CORS

import app.models.usuario
import app.models.vagas


Base.metadata.create_all(bind=engine)

app = Flask(__name__)
CORS(app)

api = Api(app,
          title="TechMatch API",
          description='API de Match de Vagas de Emprego',
          version='1.0.0',
          doc='/docs')

from app.route.usuario import usuario_bp
from app.route.vagas import vagas_bp

app.register_blueprint(usuario_bp)
app.register_blueprint(vagas_bp)

@app.route('/')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
