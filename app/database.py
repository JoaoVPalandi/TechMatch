from sqlalchemy import create_engine, text
from sqlalchemy.orm import DeclarativeBase
from dotenv import load_dotenv
import os

# Carrega as variáveis do arquivo .env
load_dotenv()

# Pega o valor da variável DATABASE. Se não existir, usa o padrão.
# O SQLAlchemy exige que caminhos do SQLite comecem com sqlite:///
db_url = os.getenv("DATABASE", "sqlite:///data/techmatch.db")

# Cria a conexão (engine)
engine = create_engine(db_url)

def init_db(db_name: str = db_url):
    data_dir = os.path.join(os.getcwd(),"data")
    
    if not os.path.exists(data_dir):
        os.makedirs(data_dir, exist_ok=True)
    with engine.connect() as conn:
        conn.execute(text("""
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo_tarefa TEXT NOT NULL,
            data_conclusao TEXT,
            concluida INTEGER DEFAULT 0    
        );
        """))

# Classe Base que os models (Usuario, Vaga) vão herdar
class Base(DeclarativeBase):
    pass
