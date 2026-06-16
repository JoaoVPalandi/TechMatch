from flask import Flask, render_template
from app.database import engine, Base
from app.models.usuario import Usuario
from app.models.vagas import Vagas

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    with app.app_context():
        Base.metadata.create_all(engine)
        print("Banco de dados criado com sucesso!")
    app.run(debug=True)
