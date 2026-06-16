from sqlalchemy import create_engine, text
from sqlalchemy.orm import DeclarativeBase
from dotenv import load_dotenv
import os

load_dotenv()

db_url = os.getenv("DATABASE", "sqlite:///data/techmatch.db")

# Cria a conexão (engine)
engine = create_engine(db_url)

def init_db(db_name: str = db_url):
    data_dir = os.path.join(os.getcwd(),"data")
    
    if not os.path.exists(data_dir):
        os.makedirs(data_dir, exist_ok=True)
        
    Base.metadata.create_all(engine)

class Base(DeclarativeBase):
    pass
