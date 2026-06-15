from sqlite3 import Connection, connect, Cursor
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase
from dotenv import load_dotenv
import os
import traceback

load_dotenv() # Procura um arquivo .env com variáveis 
DB_PATH = os.getenv('DATABASE', './data/lista.sqlite3')

def init_db(db_name: str = DB_PATH):
    with connect(db_name) as conn:
        conn.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        senha VARCHAR(200) NOT NULL,
        tipo_conta VARCHAR(50) NOT NULL,
        area VARCHAR(100),
        tags_competencia TEXT
        );
        """)
        
class Database:
    pass

    
    