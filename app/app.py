from flask import Flask, render_template
from app.database import init_db
from app.models.usuario import Usuario
from app.models.vagas import Vagas

app = Flask(__name__)
init_db()

@app.route('/')
def login():
    return render_template('login.html')
