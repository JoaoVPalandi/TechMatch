from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class Usuario(Base):
    __tablename__ = 'usuarios'

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    senha = Column(String(200), nullable=False)
    tipo_conta = Column(String(50), nullable=False)
    area = Column(String(100))
    tags_competencia = Column(Text)
